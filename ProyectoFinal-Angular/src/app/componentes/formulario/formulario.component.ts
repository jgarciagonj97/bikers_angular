import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  fechaActual: any;
  constructor() {
    this.fechaActual = new Date(Date.now())
    .toLocaleDateString()
    .replace(/\//g, '-');
   }

  ngOnInit(): void {
  }

}
