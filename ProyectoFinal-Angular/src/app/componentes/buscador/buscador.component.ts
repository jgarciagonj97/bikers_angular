import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { Usuario } from 'src/app/models/usuario.model';
import { SeguidoresService } from 'src/app/servicios/seguidores.service';
import Swal from 'sweetalert2';
import { Seguidor } from 'src/app/models/seguidor.model';


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
  activo:boolean;

  constructor(private userService: UsersService, private seguidoresService: SeguidoresService) {
    this.arrUsers = new Array;
    this.siguiendo = false;
    this.arrSiguiendo = new Array;
    this.arrFiltrados = new Array();
    this.activo = false;
  }

  async ngOnInit() {
    
      this.arrUsers = await this.userService.users();
      this.arrFiltrados = this.arrUsers;
      this.arrSiguiendo = await this.seguidoresService.siguiendo();
      //Algoritmo para no mostrar el id activo en la búsqueda de usuarios
      for (let user of this.arrUsers) {
        if (user.id === parseInt(localStorage.getItem('id'))) {
          user.siguiendo = true;
        };
        for (let siguiendo of this.arrSiguiendo) {
          if (user.id === siguiendo.fk_idUsuario2) {
            user.siguiendo = true;
          }
        }
      };
    
  };


  async seguir(user) {
    if (user.siguiendo) {
      await this.seguidoresService.dejarDeSeguir(user.id);
    } else if (!user.siguiendo) {
      await this.seguidoresService.seguir(user);
    }
    setTimeout(() => {
     user.siguiendo = !user.siguiendo; 
    }, 200);
    
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
