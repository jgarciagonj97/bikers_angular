import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/servicios/blog.service';
import { PostBlog } from 'src/app/models/postBlog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrBlog: PostBlog[];
  constructor(private blogService: BlogService, private router: Router) {
    this.arrBlog = new Array;
  }

  async ngOnInit() {
    this.arrBlog = await this.blogService.recuperarBlog();
  }

  clickBlog(pId) {
    this.router.navigate(['/blog', pId]);
  }
}
