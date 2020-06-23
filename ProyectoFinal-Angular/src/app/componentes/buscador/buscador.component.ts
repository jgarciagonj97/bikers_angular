import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { Usuario } from 'src/app/models/usuario.model';
import { SeguidoresService } from 'src/app/servicios/seguidores.service';
import Swal from 'sweetalert2';
import { Seguidor } from 'src/app/models/seguidor.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  arrUsers: Usuario[];
  siguiendo: boolean;
  arrSiguiendo: Seguidor[];
  arrFiltrados: Usuario[];

  constructor(private userService: UsersService, private seguidoresService: SeguidoresService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.arrUsers = new Array;
    this.siguiendo = false;
    this.arrSiguiendo = new Array;
    this.arrFiltrados = new Array();
  }

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async (params: ParamMap) => {
      this.arrUsers = await this.userService.users();
      this.arrFiltrados = this.arrUsers;
      this.arrSiguiendo = await this.seguidoresService.siguiendo();
      //Algoritmo para no mostrar el id activo en la búsqueda de usuarios
      for (let user of this.arrUsers) {
        if (user.id === parseInt(localStorage.getItem('id'))) {
          let indice = this.arrUsers.indexOf(user);
          this.arrUsers.splice(indice, 1);
        };
        for (let seguidor of this.arrSiguiendo) {
          if (user.id === seguidor.fk_idUsuario2) {
            user.siguiendo = true;
          }
        }
      };
    })
  };


  async seguir(user) {
    if (user.siguiendo) {
      Swal.fire({
        icon: 'success',
        title: 'Hecho',
        text: 'Usuario eliminado con éxito',
      });
      await this.seguidoresService.dejarDeSeguir(user.id);
    } else if (!user.siguiendo) {
      Swal.fire({
        icon: 'success',
        title: 'Hecho',
        text: 'Usuario seguido con éxito',
      });
      await this.seguidoresService.seguir(user);
    }
    user.siguiendo = !user.siguiendo;
  }

  buscarUsuario($event) {
    let nombre = $event.target.value;
    if (nombre !== '') {
      this.arrFiltrados = this.filtrarXNombre(this.arrUsers, nombre);
    } else {
      this.arrFiltrados = this.arrUsers;
    }
  }

  filtrarXNombre(pArray, pNombre) {
    let usersFiltrado = new Array();
    for (let usuario of pArray) {
      if (usuario.nombre.toLowerCase().includes(pNombre.toLowerCase())) {
        usersFiltrado.push(usuario);
      }
    }
    return usersFiltrado;
  }

}
