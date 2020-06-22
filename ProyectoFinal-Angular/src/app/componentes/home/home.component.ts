import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servicios/post.service';
import { PostUsuario } from 'src/app/models/postUsuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  formNewpost: FormGroup;
  arrNovedades: PostUsuario[];
  constructor(private postService: PostService) {
    this.arrNovedades = new Array();
    this.formNewpost = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      descripcion: new FormControl('', [Validators.required]),
      id: new FormControl(parseInt(localStorage.getItem('id'))),
    });
  }

  async ngOnInit() {
    this.arrNovedades = await this.postService.cargarNovedades();
    console.log(this.arrNovedades);
  }

  async onSubmit() {
    /* crear post*/
    await this.postService.crearPost(this.formNewpost.value);
  }
}
