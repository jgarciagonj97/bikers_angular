export class PostUsuario {
  titulo: string;
  descripcion: string;
  fk_idUsuario: string;
  imagen: string;
  nombre: string;

  constructor(
    titulo: string,
    descripcion: string,
    autor: string,
    imagen: string,
    nombre: string,
  ) {
    this.titulo = titulo;
    this.fk_idUsuario = autor;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.nombre = nombre;;
  }
}
