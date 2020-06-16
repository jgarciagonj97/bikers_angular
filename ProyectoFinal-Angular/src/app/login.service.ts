import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl='http://bikers1.herokuapp.com';
  }

  registro(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/api/users`, formValues).toPromise();
  }

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/api/users/login`, formValues).toPromise();
  }
}
