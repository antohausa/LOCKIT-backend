class Provider{
    constructor(nombre_titular, apellido_titular,
        dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp,
        mail_publico, telefono_publico, logo, portada, img1, img2, img3, img4, descripcion, seguridad, veinticuatrohs,
        tipo_locker, precio, descuento, barrio, fk_usuario, /*horarios*/){
            
            this.nombre_titular = nombre_titular;
            this.apellido_titular = apellido_titular;
            this.dni_titular = dni_titular;
            this.mail_interno = mail_interno;
            this.telefono_interno = telefono_interno;
            this.razon_social = razon_social;
            this.cuit = cuit;
            this.nombre_tienda = nombre_tienda;
            this.direccion = direccion;
            this.ciudad = ciudad;
            this.cp = cp;
            this.mail_publico = mail_publico;
            this.telefono_publico = telefono_publico;
            this.logo = logo;
            this.portada = portada;
            this.img1 = img1;
            this.img2 = img2;
            this.img3 = img3;
            this.img4 = img4;
            this.descripcion = descripcion;
            this.seguridad = seguridad;
            this.veinticuatrohs = veinticuatrohs;
            this.tipo_locker = tipo_locker;
            this.precio = precio;
            this.descuento = descuento;
            this.barrio = barrio;
            this.fk_usuario = fk_usuario;
           // this.horarios = horarios;


    }

}
export default Provider;