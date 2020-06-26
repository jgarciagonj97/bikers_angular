import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from '../../servicios/firebase-storage.service';
import { BlogService } from 'src/app/servicios/blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  datosFormulario: FormData;
  nombreArchivo: string;
  URLPublica: string;
  fechaActual: Date;

  constructor(
    private firebaseStorage: FirebaseStorageService,
    private blogservice: BlogService
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(100),
      ]),
      archivo: new FormControl(''),
      fecha: new FormControl((this.fechaActual = new Date())),
    });
    this.datosFormulario = new FormData();
    this.nombreArchivo = '';
    this.URLPublica = '';
    // this.fechaActual = new Date();
  }

  ngOnInit(): void { }

  //Evento que se gatilla cuando el input de tipo archivo cambia
  cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append(
          'archivo',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    }
  }

  //Sube el archivo a Cloud Storage
  async subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo
    );
    this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);
    referencia.getDownloadURL().subscribe(async (URL) => {
      this.URLPublica = URL;
      this.formulario.value.archivo = this.URLPublica;
      console.log(this.URLPublica);
      console.log(this.formulario.value);
      //console.log(this.formulario.value.archivo = this.URLPublica);
      await this.blogservice.insertarBlog(this.formulario.value);
      this.formulario.reset();
    });
  }
}
