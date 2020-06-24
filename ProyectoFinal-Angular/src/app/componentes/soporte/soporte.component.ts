import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  //formContacto: FormGroup;

  constructor(private userService: UsersService) {
    /* this.formContacto = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      motivoConsulta: new FormControl('', Validators.required),
      consulta: new FormControl('', Validators.required)
    }); */
  }

  ngOnInit(): void {
  }
  async contactForm(form) {
    console.log(form);
    console.log('Entra en la petición');
    Swal.fire({
      icon: 'success',
      title: 'Hecho',
      text: 'Correo enviado con éxito',
    });

    this.userService.mandarEmail(form);
  }

  

  
}
