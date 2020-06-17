import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './servicios/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  href: string;
  rol:string;
  
  constructor(public router: Router,private postService:PostService) {
    //this.rol = null;
    
   }

   ngOnInit():void {
     this.rol = localStorage.getItem('rol');
    console.log(this.rol);
  }

  


}

