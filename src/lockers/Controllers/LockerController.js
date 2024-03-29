import * as svc from '../Services/LockerService.js'
//import lockerDTO from '../Models/Locker.js'

export const getLockers = async (req, res) => {
    try {
        const lockers = await svc.getAll();

        res.status(200).send(lockers)
    }
    catch (err) {
        console.log(err) 
        return res.status(500).json(err)
    }

};
export const getById = async ( req, res) => {
    try {
        
       const idTienda = req.params.idTienda;
       //const {idTienda} = req.body;

        const tienda = await svc.getById(idTienda);

        res.status(200).json(tienda)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

}

export const getActivo = async ( req, res) => {
    try {
        const idTienda = req.params.idTienda;
        const activo = await svc.getActivo(idTienda);

        res.status(200).json(activo)
    }
    
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

}

export const availability = async ( req, res) => {
    try {
        const idTienda = req.params.idTienda;
        const availableLockers = await svc.getAvailability(idTienda);

        res.status(200).send(availableLockers)
    }
    
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

}

export const reservar = async (req, res) => {
    try {
        const idTienda = req.params.idTienda;
        const lockerReservado = await svc.reservar(idTienda);

        res.status(200).json(lockerReservado)
    }
    
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

}
/*export const createProvider = async (req, res) => {

    try {
        const {nombre_titular, apellido_titular,
            dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp,
            mail_publico, telefono_publico, descripcion, seguridad, veinticuatrohs,
            tipo_locker, precio, descuento, barrio, fk_usuario} = req.body

            /*const provider = new providerDTO(nombre_titular, apellido_titular,
                dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp,
                mail_publico, telefono_publico, logo, portada, img1, img2, img3, img4, descripcion, seguridad, veinticuatrohs,
                tipo_locker, precio, descuento, barrio, fk_usuario, horarios)*/

       /* const providerCreated = await svc.createProvider(nombre_titular, apellido_titular,
            dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp,
            mail_publico, telefono_publico,  descripcion, seguridad, veinticuatrohs,
            tipo_locker, precio, descuento, barrio, fk_usuario);

        res.status(201).send(providerCreated)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

};*/