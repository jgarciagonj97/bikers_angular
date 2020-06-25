import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  baseUrl: string;

  constructor(private httpClient: HttpClient, private postService: PostService) {
    this.baseUrl = 'https://bikers1.herokuapp.com';
  }

  // async compruebaToken() {
  //   const tokencillo = await this.httpClient.post(`${this.baseUrl}/login`);
  //   return tokencillo;
  // }

  async actualizarPerfil(formValues): Promise<any> {
    const id = await this.postService.obtenerId(formValues.email);
    return this.httpClient
      .put(`${this.baseUrl}/api/users/${id[0].id}`, formValues)
      .toPromise();
  }

  users(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/api/users`).toPromise();
  }

  mandarEmail(body) {
    return this.httpClient.post(`${this.baseUrl}/api/sendEmail`, body).toPromise()
  }

  getIdByEmail(email) {
    return this.httpClient.get(`${this.baseUrl}/api/users/id/${email}`).toPromise();
  }

  async cambiarPassword(pEmail, pPassword) {
    const id = await this.getIdByEmail(pEmail)
    console.log(pEmail)
    console.log(pPassword)
    return this.httpClient.put(`${this.baseUrl}/api/users/password/${id[0].id}`, pPassword).toPromise();
  }

  resetPassword(pEmail) {
    console.log('Entra en reset', pEmail);
    return this.httpClient.post(`${this.baseUrl}/api/recuperar`, pEmail).toPromise();
  }


}
