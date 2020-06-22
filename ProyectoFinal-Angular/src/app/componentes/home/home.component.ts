import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servicios/post.service';
import { PostUsuario } from 'src/app/models/postUsuario.model';
import { FirebaseStorageService } from 'src/app/servicios/firebase-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  formNewpost: FormGroup
  arrNovedades: PostUsuario[];
  datosFormulario: FormData;
  nombreArchivo: string;
  URLPublica: string;
  fechaActual: Date;

  constructor(private postService: PostService, private firebaseStorage: FirebaseStorageService) {
    this.arrNovedades = new Array()
    this.formNewpost = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      descripcion: new FormControl('', [Validators.required]),
      archivo: new FormControl(''),
      id: new FormControl(parseInt(localStorage.getItem('id')))
    })
    this.datosFormulario = new FormData();
    this.nombreArchivo = '';
    this.URLPublica = '';
  }

  async ngOnInit() {
    this.arrNovedades = await this.postService.cargarNovedades();
    console.log(this.arrNovedades)
  }

  cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    }
  }

  //Sube el archivo a Cloud Storage
  async onSubmit() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);
    referencia.getDownloadURL().subscribe(async (URL) => {
      this.URLPublica = URL;
      this.formNewpost.value.archivo = this.URLPublica;
      console.log(this.URLPublica);
      console.log(this.formNewpost.value);
      //console.log(this.formulario.value.archivo = this.URLPublica);
      await this.postService.crearPost(this.formNewpost.value);
      this.formNewpost.reset();
    });
  }
}
