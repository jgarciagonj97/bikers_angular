import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servicios/post.service';
import { PostUsuario } from 'src/app/models/postUsuario.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formNewpost: FormGroup
  arrNovedades:PostUsuario[];
  constructor(private postService: PostService) { 
    this.arrNovedades = new Array()
    this.formNewpost = new FormGroup({
      titulo: new FormControl(''),
      descripcion: new FormControl('')
    })
  }

   async ngOnInit() {
  this.arrNovedades = await this.postService.cargarNovedades();
  console.log(this.arrNovedades)
  }

  onSubmit(){
    /* crear post*/
    this.postService.crearPost(this.formNewpost.value)

  }
}
