export class PostUsuario {
  titulo: string;
  descripcion: string;
  fk_idUsuario: string;
  imagen: string;

  constructor(
    titulo: string,
    descripcion: string,
    autor: string,
    imagen: string,
  ) {
    this.titulo = titulo;
    this.fk_idUsuario = autor;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}
