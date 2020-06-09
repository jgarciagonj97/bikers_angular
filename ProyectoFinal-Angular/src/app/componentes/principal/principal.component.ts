import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  registro = true;
  login = false;
 
  constructor() {}

  ngOnInit(): void {}

  mostrar() {
    this.registro = !this.registro;
    
  }
  mostrar2() {
    this.login = !this.login;
    
  }
}
