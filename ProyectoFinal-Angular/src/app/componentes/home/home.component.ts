import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servicios/post.service';
import { PostUsuario } from 'src/app/models/postUsuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrNovedades:PostUsuario[];
  constructor(private postService: PostService) { 
    this.arrNovedades = new Array()
  }

   async ngOnInit() {
  this.arrNovedades = await this.postService.cargarNovedades();
  console.log(this.arrNovedades)
  }

}
