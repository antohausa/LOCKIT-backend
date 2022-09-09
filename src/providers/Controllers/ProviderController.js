import * as svc from '../Services/ProviderService.js'
import Provider from '../Models/Provider.js'

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


        /* los datos son:
        const {nombre_titular, apellido_titular,
             dni_titular, mail_interno, telefono_interno, razon_social, cuit, nombre_tienda, direccion, ciudad, cp,
             mail_publico, telefono_publico, descripcion, seguridad, veinticuatrohs,
             tipo_locker, precio, descuento, barrio, fk_usuario} */


        const provider = new Provider(req.body)
        console.log("hola")
        const providerCreated = await svc.createProvider(provider.nombre_titular, provider.apellido_titular,
    provider.dni_titular, provider.mail_interno, provider.telefono_interno, provider.razon_social, provider.cuit, provider.nombre_tienda, provider.direccion, provider.ciudad, provider.cp,
    provider.mail_publico, provider.telefono_publico, provider.descripcion, provider.seguridad, provider.veinticuatrohs,
    provider.tipo_locker, provider.precio, provider.descuento, provider.barrio, provider.fk_usuario, provider.horario)


    res.sendStatus(201).send(providerCreated)
}
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

};

export const getByBarrio = async (req, res) => {
    try {
        console.log("hola")
        const barrio = req.body.barrio;
       console.log(barrio)

        const tienda = await svc.getByBarrio(barrio);
//        console.log(tienda)
        res.status(tienda.length === 0 ? 500 : 200).send(tienda)
    } catch (err) {
        res.status(500).send({ err })
    }
}
