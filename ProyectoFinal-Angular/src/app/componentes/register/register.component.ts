import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      nombre: new FormControl('',[
        Validators.required
      ]),
      apellidos: new FormControl('',[
        Validators.required
      ]),
      username: new FormControl('',[
        Validators.required
      ]),
      fecha_nacimiento: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required
      ]),
      ciudad: new FormControl('',[
        Validators.required
      ])
    })
  }


  ngOnInit(): void { 
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
}
