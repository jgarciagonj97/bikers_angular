import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/servicios/post.service';
import Swal from 'sweetalert2';
import { UsersService } from 'src/app/servicios/users.service';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  formPassword: FormGroup;
   

  constructor(private loginservice: LoginService, private router: Router, private postService: PostService, private usersService: UsersService) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });

    this.formPassword = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.loginservice.login(this.formLogin.value);
    const id = await this.postService.obtenerId(this.formLogin.value.email);
    console.log(response);
    //const usuario = this.postService.obtenerUsuario(id[0].id);
    if (response['success']) {
      const token = response['token'];
      localStorage.setItem('user-token', token);
      localStorage.setItem('id', id[0].id);
      //Si el rol no es admin, que no se muestre el rol en el localStorage
      if (response['rol'] === 'admin') {
        localStorage.setItem('rol', response['rol']);
      }
      this.router.navigate(['/home']);
    }
    if (response['error']) {
      Swal.fire({
        icon: 'error',
        title: '¡Vaya!',
        text: 'Email o contraseña incorrecto',
      })
      this.formLogin.reset();
    }
    //Borra token e id a los 6 segundos si no hay recarga en la página 
    setTimeout(() => {
      localStorage.removeItem('user-token');
      localStorage.removeItem('id');
    }, 100000000);
  }


  async passwordOlvidada() {
    const arrUsuarios: Usuario[] = await this.usersService.users();
    let existe: boolean = false;
    for (let usuario of arrUsuarios) {
      if (usuario.email === this.formPassword.value.email) {
        existe = true;
      }
    }
    if (existe === false) {
      Swal.fire({
        icon: 'error',
        title: '¡Email no registrado!',
        text: 'El email que has introducido no se encuentra registrado en nuestra aplicación. Introduce el email correcto o registrate',
      });
      this.formPassword.reset();
    } else {
      Swal.fire({
        icon: 'success',
        title: '¡Email enviado!',
        text: 'Te hemos enviado un correo electrónico con las instrucciones para restablecer tu contraseña. Si no lo encuentras, revisa el buzón de correo no deseado.',
      });
      await this.usersService.resetPassword(this.formPassword.value);
      this.formPassword.reset();
    }
    this.formPassword.reset();
  }

  registrate() {
   /* Intentar mostrar el apartado "registrate" */
  }
}
