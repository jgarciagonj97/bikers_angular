export class PostBlog {
    id: number;
    titulo: string;
    texto: string;
    fecha: Date;
    imagen: string;
    
    


    constructor(titulo: string, texto: string, imagen: string, fecha: Date) {
        this.titulo = titulo;
        this.texto = texto;
        this.imagen = imagen;
        this.fecha = fecha;
        
    }
}