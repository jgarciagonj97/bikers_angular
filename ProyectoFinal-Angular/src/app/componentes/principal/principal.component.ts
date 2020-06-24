import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  registroValor:boolean;
  constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute) {
   this.registroValor = true;
   }
  ngOnInit(): void {
    
    
   }
   
  mostrar(isRegistro) { 
    this.registroValor = isRegistro;
  }
  
}
