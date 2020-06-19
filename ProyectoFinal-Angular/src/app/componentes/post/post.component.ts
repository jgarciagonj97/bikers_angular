import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/servicios/blog.service';
import { PostBlog } from 'src/app/models/postBlog.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  arrBlog: PostBlog[];
  post: any;
  constructor(private blogService: BlogService, private router:Router) {
    this.arrBlog = new Array;

  }

  async ngOnInit() {
    this.arrBlog = await this.blogService.recuperarBlog();
    const id= this.router.url.split('/blog/')
    for(let elemento of this.arrBlog){
      if(elemento.id ===parseInt(id[1])) console.log(elemento.id);
      this.post = elemento;
    }
    console.log(this.post)
    //this.post = await this.blogService.recuperarBlogActivo(id[1])
    //console.log(this.post);
  }

}
