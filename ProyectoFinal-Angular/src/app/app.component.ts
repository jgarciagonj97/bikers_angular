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
  //rol:string;
  //user:any;
  constructor(public router: Router,private postService:PostService) {
    //this.rol = null;
   }

  async ngOnInit():Promise<any> {
    //this.user = await this.postService.obtenerUsuario(await this.postService.recuperarEmail);
    //this.rol = this.user.rol;
    //console.log(this.user);
  }

}

