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
}
