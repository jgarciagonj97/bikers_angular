import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/servicios/blog.service';
import { PostBlog } from 'src/app/models/postBlog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 arrBlog: PostBlog[];
  constructor(private blogService:BlogService) { 
    this.arrBlog = new Array;
  }

  async ngOnInit() {
    this.arrBlog = await this.blogService.recuperarBlog();
    console.log(this.arrBlog);
  }

  clickBlog($event){
    console.log($event);
  }



}
