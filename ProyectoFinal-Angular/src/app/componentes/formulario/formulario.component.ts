import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from '../../servicios/firebase-storage.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  datosFormulario: FormData;
  nombreArchivo: string;
  URLPublica: string;
  fechaActual: Date;

  constructor(private firebaseStorage: FirebaseStorageService) {
    this.formulario = new FormGroup({
      archivo: new FormControl(null, [
        Validators.required
      ]),
      titulo: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      texto: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ]),
    });
    this.datosFormulario = new FormData();
    this.nombreArchivo = '';
    this.URLPublica = '';
    this.fechaActual = new Date();
  }

  ngOnInit(): void {
  }

  //Evento que se gatilla cuando el input de tipo archivo cambia
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
  subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
      console.log(this.URLPublica);
    });
    this.formulario.reset();
  }

}
