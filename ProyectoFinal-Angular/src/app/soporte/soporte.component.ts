import { Component, OnInit } from '@angular/core';
import { $ as jQuery } from 'node_modules/jquery';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
