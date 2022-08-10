import * as svc from '../Services/ProviderService.js'
//import providerDTO from '../Models/Provider.js'

export const getProviders = async (req, res) => {
    try {
        const provs = await svc.getAll();

        res.status(200).send(provs)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

};
/*export const getById = async ( req, res) => {
    try {
        
       // const idTienda = req.params.id;
       const {idTienda} = req.body;
        const tienda = await svc.getById(idTienda);

        res.status(200).json(tienda)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

};*/

export const createProvider = async (req, res) => {

    try {
        console.log(req.body)

        const {nombre_titular, apellido_titular,
            dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp,
            mail_publico, telefono_publico, descripcion, seguridad, veinticuatrohs,
            tipo_locker, precio, descuento, barrio, fk_usuario} = req.body

            /*const provider = new providerDTO(nombre_titular, apellido_titular,
                dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp,
                mail_publico, telefono_publico, logo, portada, img1, img2, img3, img4, descripcion, seguridad, veinticuatrohs,
                tipo_locker, precio, descuento, barrio, fk_usuario, horarios)*/

        const providerCreated = await svc.createProvider(nombre_titular, apellido_titular,
            dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp,
            mail_publico, telefono_publico,  descripcion, seguridad, veinticuatrohs,
            tipo_locker, precio, descuento, barrio, fk_usuario);

        res.status(201).send(providerCreated)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

};