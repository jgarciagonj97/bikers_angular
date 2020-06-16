import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private loginservice: LoginService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.loginservice.login(this.formLogin.value);
    if (response['success']) {
      const token = response['token'];
      localStorage.setItem('user-token', token);
      this.router.navigate(['/home']);
    }
  }

}
