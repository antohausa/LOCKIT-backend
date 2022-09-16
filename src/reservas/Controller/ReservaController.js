import * as svc from '../Services/ReservasService.js'
//import lockerDTO from '../Models/Locker.js'

export const getReservas = async (req, res) => {
    try {
        const reservas = await svc.getAll();

        res.status(200).send(reservas)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

};
/*export const getById = async ( req, res) => {
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

}*/

