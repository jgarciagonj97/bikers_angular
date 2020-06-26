import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/app/servicios/post.service';
import Swal from 'sweetalert2';
import { SeguidoresService } from 'src/app/servicios/seguidores.service';
import { Seguidor } from 'src/app/models/seguidor.model';
import { FirebaseStorageService } from 'src/app/servicios/firebase-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  formUpdate: FormGroup;
  user: any;
  arrSeguidores: Seguidor[];
  arrSiguiendo: Seguidor[];
  seguidores: number;
  siguiendo: number;
  datosFormulario: FormData;
  nombreArchivo: string;
  URLPublica: string;
  puede: boolean;

  constructor(
    private userService: UsersService,
    private postService: PostService,
    private seguidoresService: SeguidoresService,
    private firebaseStorage: FirebaseStorageService
  ) {
    this.puede = false;
    this.user = {};
    this.formUpdate = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      ciudad: new FormControl(''),
      id: new FormControl(''),
      password: new FormControl(''),
      imagen: new FormControl('')
    });
    this.arrSeguidores = new Array;
    this.seguidores = 0;
    this.siguiendo = 0;
    this.arrSiguiendo = new Array;
    this.datosFormulario = new FormData();
    this.nombreArchivo = '';
    this.URLPublica = '';
  }

  async ngOnInit() {
    this.user = await this.postService.obtenerUsuario(
      localStorage.getItem('id')
    );
    this.formUpdate = new FormGroup({
      nombre: new FormControl(this.user.nombre),
      apellidos: new FormControl(this.user.apellidos),
      email: new FormControl(this.user.email),
      username: new FormControl(this.user.username),
      ciudad: new FormControl(this.user.ciudad),
      id: new FormControl(this.user.id),
      password: new FormControl(this.user.password),
      imagen: new FormControl('')
    });
    this.arrSeguidores = await this.seguidoresService.seguidores();
    for (let seguidor of this.arrSeguidores) this.seguidores++;
    this.arrSiguiendo = await this.seguidoresService.siguiendo();
    for (let siguiendo of this.arrSiguiendo) this.siguiendo++;
    console.log(this.seguidores, this.siguiendo);
  }

  // async onSubmit() {
  //   console.log(this.formUpdate.value)
  //   // const response = await this.userService.actualizarPerfil(
  //   //   this.formUpdate.value
  //   // );
  //   const response = this.subirArchivo();
  //   console.log(response);
  //   if (response['success']) {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Hecho',
  //       text: 'Has actualizado el perfil',
  //     });
  //   }
  // }

  cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('imagen');
        this.datosFormulario.append('imagen', event.target.files[i], event.target.files[i].name)
      }
      this.puede = true;
    }
  }

  async onSubmit() {
    let imagen = this.datosFormulario.get('imagen');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, imagen);
    referencia.getDownloadURL().subscribe(async (URL) => {
      this.URLPublica = URL;
      this.formUpdate.value.imagen = this.URLPublica;
      console.log(this.URLPublica);
      console.log(this.formUpdate.value);
      //console.log(this.formulario.value.archivo = this.URLPublica);
      const response = await this.userService.actualizarPerfil(this.formUpdate.value);
      if (response['success']) {
        Swal.fire({
          icon: 'success',
          title: 'Hecho',
          text: 'Has actualizado el perfil',
        });
      }
    });
  }

}
