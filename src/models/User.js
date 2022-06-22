class userDTO {
    constructor(nombre, apellido, mail, contrasenia, telefono, fechaNac, fkRol, username) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
        this.fechaNac = fechaNac;
        this.fkRol = fkRol;
        this.username = username;
    }
}
export default userDTO;