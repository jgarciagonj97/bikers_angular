export class PostUsuario{
    titulo: string;
    descripcion: string;
    fk_idUsuario: string;
    

    constructor(titulo: string, descripcion: string,autor: string){
        this.titulo = titulo;
        this.fk_idUsuario = autor;
        this.descripcion = descripcion;
        
    }
}