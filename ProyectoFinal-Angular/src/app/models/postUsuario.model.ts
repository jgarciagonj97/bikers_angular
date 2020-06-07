export class PostUsuario{
    titulo: string;
    texto: string;
    autor: string;
    fecha: Date;

    constructor(titulo: string,texto: string,autor: string,fecha: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.texto = texto;
        this.fecha = fecha;
    }
}