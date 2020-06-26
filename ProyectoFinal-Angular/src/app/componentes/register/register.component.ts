import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegistro: FormGroup;
  mailAct: boolean;
  usernameAct: boolean;
  imagen: string;


  constructor(private loginService: LoginService, private router: Router) {
    this.imagen = 'https://static.vecteezy.com/system/resources/previews/000/550/731/non_2x/user-icon-vector.jpg';
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      fecha_nacimiento: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      password: new FormControl('', [
       Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
      ]),
      ciudad: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl(this.imagen)
    })
  }


  ngOnInit(): void {
    let emailControl = this.formRegistro.controls.email;
    emailControl.valueChanges.pipe(debounceTime(2000)).subscribe(async (value) => {
      let respuesta = await this.emailCorrecto(emailControl);
      console.log(respuesta);
    });
    let usernameControl = this.formRegistro.controls.username;
    usernameControl.valueChanges.pipe(debounceTime(2000)).subscribe(async (value) => {
      let respuesta = await this.usernameCorrecto(usernameControl);
      console.log(respuesta);
    });
  }


  onSubmit() {
    this.loginService.registro(this.formRegistro.value)
      .then(response => {
        if (response.success) {
          console.log(response)
          this.formRegistro.reset();
          //Crear un alert con la libreria que hace los alerts chulos
          Swal.fire({
            icon: 'success',
            title: 'Hecho',
            text: 'Te has registrado correctamente',
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  async emailCorrecto(pControl) {
    let emailRegistro = await this.loginService.validaMail(pControl.value);
    if (emailRegistro !== null) {
      return this.mailAct = false
    };
    return this.mailAct = true;
  }

  async usernameCorrecto(pControl) {
    let usernameRegistro = await this.loginService.validaUsername(pControl.value);
    if (usernameRegistro !== null) {
      return this.usernameAct = false;
    };
    return this.usernameAct = true;
  }

}
