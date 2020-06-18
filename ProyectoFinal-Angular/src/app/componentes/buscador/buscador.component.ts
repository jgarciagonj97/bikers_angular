import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  arrUsers: Usuario[];
  constructor(private userService: UsersService) { 
    this.arrUsers = new Array;
  }

  async ngOnInit() {
    this.arrUsers = await this.userService.users();
    
  }

  
}
