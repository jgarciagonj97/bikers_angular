import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string;
  id: number;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://bikers1.herokuapp.com/api';
    this.id = 121;

  }
  recibirId(pId) {
    this.id = pId;
    console.log('Este es el recibirID'+this.id)
  }
  cargarNovedades(): Promise<any> {
    console.log(`${this.baseUrl}/posts/home/${this.id} `)
    return this.httpClient.get(`${this.baseUrl}/posts/home/${this.id}`).toPromise();
  }
  obtenerId(pEmail): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/users/id/${pEmail}`).toPromise();
  }


}
