import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/app/servicios/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  formUpdate: FormGroup;

  user: any;
  constructor(
    private userService: UsersService,
    private postService: PostService,
  ) {
    this.user = {};
    this.formUpdate = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      ciudad: new FormControl(''),
      id: new FormControl(''),
      password: new FormControl('')
    });
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
      password: new FormControl(this.user.password)
    });
  }

  async onSubmit() {
    console.log(this.formUpdate.value)
    const response = await this.userService.actualizarPerfil(
      this.formUpdate.value
    );
    if (response['success']) {
      Swal.fire({
        icon: 'success',
        title: 'Hecho',
        text: 'Has actualizado el perfil',
      });
    }
  }
}
