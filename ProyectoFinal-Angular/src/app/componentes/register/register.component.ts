import { Component, OnInit } from '@angular/core';
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

  constructor(private loginService: LoginService, private router: Router) {
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
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      ciudad: new FormControl('', [
        Validators.required
      ])
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
    console.log(pControl.value);
    let emailRegistro = await this.loginService.validaMail(pControl.value);
    if (emailRegistro !== null) {
      return { activo: this.mailAct = false }
    };
    return this.mailAct = true;
  }

  async usernameCorrecto(pControl) {
    console.log(pControl.value);
    let usernameRegistro = await this.loginService.validaUsername(pControl.value);
    if (usernameRegistro !== null) {
      return {
        usernameIncorrecto:
          Swal.fire({
            icon: 'error',
            title: 'Utiliza otro nombre de usuario',
          })
      };
    };
    return null;
  }

}
