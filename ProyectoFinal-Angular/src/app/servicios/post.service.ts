import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string;
  id: string;
  usuario: any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://bikers1.herokuapp.com/api';
    this.id = '';
    this.usuario = {};
  }


  cargarNovedades(): Promise<any> {
    this.id = localStorage.getItem('id');
    //console.log(`${this.baseUrl}/posts/home/${this.id} `);
    return this.httpClient.get(`${this.baseUrl}/posts/home/${this.id}`).toPromise();

  }
  obtenerId(pEmail): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/id/${pEmail}`).toPromise();
  }
  async obtenerUsuario(pId): Promise<any> {
    console.log(pId)
    this.usuario = await this.httpClient.get(`${this.baseUrl}/users/get/${pId}`).toPromise();
    //console.log(this.usuario);
    return this.usuario;
  }
  recuperarEmail() {
    return this.usuario.email;
  }

  async crearPost(formValues) {
    console.log(formValues)
    return await this.httpClient
      .post(`${this.baseUrl}/posts/${localStorage.getItem('id')}`, formValues)
      .toPromise();
  }



}
