import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contador: number;

  constructor() {
    this.contador = 0;
  }

  ngOnInit(): void {
    if (this.contador === 0) {
      window.location.reload();
      this.contador++;
    }
  }

}
