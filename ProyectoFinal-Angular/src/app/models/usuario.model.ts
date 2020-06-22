export class Usuario {

    id:number;
    nombre: string;
    apellidos: string;
    username:string;
    email: string;
    fecha_registro:Date;
    password: string;
    ciudad:string;
    fecha_nacimiento: Date;
    imagen:string;
    rol:string;
    
    siguiendo:boolean;
    
    
    

    constructor(id: number,nombre: string, apellidos: string,username:string, fecha_nacimiento: Date, email: string, password: string, ciudad: string, fecha_registro:Date, imagen:string,rol:string) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.username = username;
        this.email = email;
        this.fecha_registro = fecha_registro;
        this.password = password;
        this.ciudad = ciudad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.imagen = imagen;
        this.rol = rol;
        this.siguiendo = false;
    }
}