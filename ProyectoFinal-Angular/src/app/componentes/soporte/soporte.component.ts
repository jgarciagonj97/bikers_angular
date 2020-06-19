import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';


@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  formContacto: FormGroup;

  constructor(private userService: UsersService) {
    this.formContacto = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      motivoConsulta: new FormControl('', Validators.required),
      consulta: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }


  async onSubmit() {
    //Enviar email a la dirección de contacto que creemos.
    const response = await this.userService.mandarEmail(this.formContacto.value)
  }

  onClick($event) {
    $('#collapseOne').toggle(300);
    $('#collapseTwo').hide(300);
    $('#collapseThree').hide(300);
  }
  onClick2($event) {
    $('#collapseOne').hide(300)
    $('#collapseTwo').toggle(300);
    $('#collapseThree').hide(300);
  }
  onClick3($event) {
    $('#collapseOne').hide(300);
    $('#collapseTwo').hide(300);
    $('#collapseThree').toggle(300);
  }
}
