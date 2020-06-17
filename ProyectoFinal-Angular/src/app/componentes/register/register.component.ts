import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this.formRegistro = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      username: new FormControl(),
      fecha_nacimiento: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      ciudad: new FormControl()
    })
  }


  ngOnInit(): void {
  }


  onSubmit() {
    this.loginService.registro(this.formRegistro.value)
      .then(response => {
        if (response.success) {
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
}
