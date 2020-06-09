import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  registro = true;
  
 
  constructor() {}

  ngOnInit(): void {}

  mostrar(isRegistro) {

    this.registro = isRegistro;
    
  }
  
}
