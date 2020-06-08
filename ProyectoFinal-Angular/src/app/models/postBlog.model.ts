export class PostBlog {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoría: string;


    constructor(titulo: string, texto: string, autor: string, imagen: string, fecha: Date, categoría: string) {
        this.titulo = titulo;
        this.texto = texto;
        this.autor = autor;
        this.imagen = imagen;
        this.fecha = fecha;
        this.categoría = categoría;
    }
}