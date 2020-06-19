import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './servicios/post.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  rol: string;

  constructor(public router: Router, private postService: PostService, private location: Location) {
    router.events.subscribe(() => {
      if (location.path() != "") this.rol = localStorage.getItem('rol');
    });
  }

  ngOnInit(): void {
    //Borra token e id a los 6 segundos si hay recarga en la página
    setTimeout(() => {
      localStorage.removeItem('user-token');
      localStorage.removeItem('id');
    }, 100000000);
  }

  onClick() {
    Swal.fire({
      title: '¿Estás segur@?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir'
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('user-token');
        localStorage.removeItem('rol');
        localStorage.removeItem('id');
        this.router.navigate(['/principal']);
      }
    })
  }

}








