import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SeguidoresService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://bikers1.herokuapp.com/api/amigos';
  }

    siguiendo() {
      console.log('ENtra en siguiendo')
    return this.httpClient.get(`${this.baseUrl}/${localStorage.getItem('id')}`).toPromise();
   }
   seguir(body){
     console.log('entra en seguir a ',body);
     console.log(`${this.baseUrl}/seguir/${localStorage.getItem('id')} `,body)
     return this.httpClient.post(`${this.baseUrl}/seguir/${localStorage.getItem('id')}`,body).toPromise();
     
   }
}
