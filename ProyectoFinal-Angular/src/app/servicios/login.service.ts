import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string;
  registroValor: boolean;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://bikers1.herokuapp.com';
    this.registroValor = true;
    //this.baseUrl = 'http://localhost:3000';
  }

  registro(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/api/users`, formValues).toPromise();
  }

  validaMail(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/api/users/register`, { email: formValues }).toPromise();
  }

  validaUsername(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/api/users/username`, { username: formValues }).toPromise();
  }

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/api/users/login`, formValues).toPromise();
  }

  setRegistro(boolean){
    console.log(boolean)
    this.registroValor = boolean;
  }
  getRegistro(){
    return this.registroValor;
  }

}
