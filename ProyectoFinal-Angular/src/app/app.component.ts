import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  href: string;
  rol:string;
  constructor(public router: Router) {
    this.rol = null;
   }

  ngOnInit() {
    if(localStorage.getItem("rol")) this.rol="admin";
      
  }

}

