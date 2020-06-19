import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  fechaActual: any;
  files;

  constructor(private http: HttpClient) {
    this.formulario = new FormGroup({
      titulo: new FormControl(""),
      autor: new FormControl(""),
      texto: new FormControl(""),
      file: new FormControl("")
    });
    // this.fechaActual = new Date(Date.now())
    //   .toLocaleDateString()
    //   .replace(/\//g, '-');
  }

  ngOnInit(): void {
  }

  onFileChange($event) {
    this.files = $event.target.files;
    console.log(this.files);
  }

  onSubmit() {
    let fd = new FormData();
    fd.append("imagen", this.files[0], "nuevaImagen.png");
    fd.append("titulo", this.formulario.controls.titulo.value);
    let header = new HttpHeaders();
    header.append('Content-Type', 'multipart/form-data');
    const req = new HttpRequest("POST", "https://bikers1.herokuapp.com/", fd, {
      headers: header
    });
    this.http
      .request(req)
      .toPromise()
      .then(result => {
        console.log(result);
      });
  }

}
