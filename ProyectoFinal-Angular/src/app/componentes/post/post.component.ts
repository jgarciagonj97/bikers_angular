import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/servicios/blog.service';
import { PostBlog } from 'src/app/models/postBlog.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  arrBlog: PostBlog[];
  post: any;
  arrRelacionados: PostBlog[];


  constructor(private blogService: BlogService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.arrBlog = new Array;
    this.arrRelacionados = new Array;

  }

   ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async(params: ParamMap) => {
      this.post = await this.blogService.recuperarBlogActivo(this.router.url.split('/blog/')[1]);
      this.arrBlog = await this.blogService.recuperarBlog();
      this.arrRelacionados=[];
      this.mostrarRelacionados();
    })
  }

  mostrarRelacionados() {
    for (let i = 0; i < 3; i++) 
    this.arrRelacionados.push(this.arrBlog[Math.floor(Math.random() * this.arrBlog.length)]); 
  }

  clickPost(pId) {
    this.router.navigate(['/blog', pId]);
  }

}
