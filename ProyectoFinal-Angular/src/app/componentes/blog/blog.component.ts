import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/servicios/blog.service';
import { PostBlog } from 'src/app/models/postBlog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  arrBlog: PostBlog[];
  arrFiltrados: PostBlog[];
  constructor(private blogService: BlogService, private router: Router) {
    this.arrBlog = new Array();
    this.arrFiltrados = new Array();
  }

  async ngOnInit() {
    this.arrBlog = await this.blogService.recuperarBlog();
    this.arrFiltrados = this.arrBlog;
  }

  clickBlog(pId) {
    this.router.navigate(['/blog', pId]);
  }

  buscarPost($event) {
    let nombre = $event.target.value;
    if (nombre !== '') {
      this.arrFiltrados = this.filtrarPorTitulo(this.arrBlog, nombre);
    } else {
      this.arrFiltrados = this.arrBlog;
    }
  }

  filtrarPorTitulo(pArray, pTitulo) {
    let postFiltrado = new Array();
    for (let blog of pArray) {
      if (blog.titulo.toLowerCase().includes(pTitulo.toLowerCase())) {
        postFiltrado.push(blog);
      }
    }
    return postFiltrado;
  }
}
