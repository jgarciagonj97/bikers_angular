export class Seguidor {
    fk_idUsuario1: number;
    fk_idUsuario2: number;
    id: number;

    constructor(fk_idUsuario1: number, fk_idUsuario2: number, id: number) {
        this.fk_idUsuario1 = fk_idUsuario1;
        this.fk_idUsuario2 = fk_idUsuario2;
        this.id = id;
    }
}