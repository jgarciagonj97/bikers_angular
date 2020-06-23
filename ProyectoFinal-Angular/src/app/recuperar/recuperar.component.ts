import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../servicios/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  formCambiar: FormGroup;
  constructor(private usersService:UsersService, private router:Router) {
    this.formCambiar = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password1: new FormControl('', [
        Validators.required
      ]),
      password2: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  async cambiar() {
    console.log(this.formCambiar.value.email, this.formCambiar.value.password1);
    await this.usersService.cambiarPassword(this.formCambiar.value.email, this.formCambiar.value)
    
    alert('Contraseña cambiada con éxito!')
    this.router.navigate(['principal'])
  }
}
