import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { Usuario } from 'src/app/models/usuario.model';
import { SeguidoresService } from 'src/app/servicios/seguidores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  arrUsers: Usuario[];

  constructor(private userService: UsersService, private seguidoresService: SeguidoresService) {
    this.arrUsers = new Array;
  }

  async ngOnInit() {
    this.arrUsers = await this.userService.users();
    //Algoritmo para no mostrar el id activo en la búsqueda de usuarios
    for (let user of this.arrUsers) {
      if (user.id === parseInt(localStorage.getItem('id'))) {
        let indice = this.arrUsers.indexOf(user);
        this.arrUsers.splice(indice, 1);
      };
    };
  };

  async seguir(user){
    await this.seguidoresService.seguir(user);
    Swal.fire({
      icon: 'success',
      title: 'Hecho',
      text: 'Usuario seguido con éxito',
    });

    //ver a cuantos está siguiendo
    await this.seguidoresService.siguiendo();
  }

}
