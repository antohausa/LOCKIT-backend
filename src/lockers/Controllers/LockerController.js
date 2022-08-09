import * as svc from '../Services/LockerService.js'
import lockerDTO from '../Models/Locker.js'

export const getLockers = async (req, res) => {
    try {
        const provs = await svc.getAll();

        res.status(200).send(provs)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

};

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