import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostBlog } from '../models/postBlog.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://bikers1.herokuapp.com/api/blog'
  }

  recuperarBlog(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  async recuperarBlogActivo(idBlog) {
    return  await this.httpClient.get(`${this.baseUrl}/${idBlog}`).toPromise();
     
  }
}
