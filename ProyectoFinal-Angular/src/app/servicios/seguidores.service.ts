import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seguidor } from '../models/seguidor.model';

@Injectable({
  providedIn: 'root'
})
export class SeguidoresService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://bikers1.herokuapp.com/api/amigos';
  }

  siguiendo(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${localStorage.getItem('id')}`).toPromise();
  }

  seguir(body) {
    return this.httpClient.post(`${this.baseUrl}/seguir/${localStorage.getItem('id')}`, body).toPromise();
  }

  dejarDeSeguir(idEliminar){
    return this.httpClient.delete(`${this.baseUrl}/eliminar/${localStorage.getItem('id')}/${idEliminar}`).toPromise();
  }

  seguidores(): Promise<any>{
    return this.httpClient.get(`${this.baseUrl}/seguidores/${localStorage.getItem('id')}`).toPromise();
  }

}
