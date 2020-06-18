import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './servicios/post.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  rol: string;

  constructor(public router: Router, private postService: PostService, private location: Location) {
    router.events.subscribe(() => {
      if (location.path() != "") this.rol = localStorage.getItem('rol');
    });
  }

  ngOnInit(): void {
    
  }
}








