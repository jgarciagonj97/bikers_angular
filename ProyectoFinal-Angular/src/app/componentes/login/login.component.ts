import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/servicios/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private loginservice: LoginService, private router: Router, private postService: PostService) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.loginservice.login(this.formLogin.value);
    const id = await this.postService.obtenerId(this.formLogin.value.email);
    localStorage.setItem('id', id[0].id);
    console.log(response);
    //const usuario = this.postService.obtenerUsuario(id[0].id);
    if (response['success']) {
      const token = response['token'];
      localStorage.setItem('user-token', token);
      //Si el rol no es admin, que no se muestre el rol en el localStorage
      if (response['rol'] === 'admin') {
        localStorage.setItem('rol', response['rol']);
      }
      this.router.navigate(['/home']);
    }
  }

}
