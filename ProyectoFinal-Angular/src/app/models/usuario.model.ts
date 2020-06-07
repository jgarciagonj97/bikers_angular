export class Usuario {

    nombre: string;
    apellidos: string;
    fecha_nacimiento: Date;
    email: string;
    password: string;
    ciudad: string;

    constructor(nombre: string, apellidos: string, fecha_nacimiento: Date, email: string, password: string, ciudad: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha_nacimiento = fecha_nacimiento;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        
    }
}