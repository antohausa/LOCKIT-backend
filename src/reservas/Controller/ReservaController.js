import * as locker_svc from '../../lockers/Services/LockerService.js'
import * as svc from '../Services/ReservaService.js'
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

export const getReservaById = async (req, res) => {
    try {
    
        const id = req.params.id;

        const reserva = await svc.getReservaById(id);

        res.status(200).json(reserva)

    } catch (err) {
        res.status(500).send({ err })
    }

}

export const getInfoById = async (req, res) => {
    try {
    
        const id = req.params.id;

        const info = await svc.getInfoById(id);

        res.status(200).json(info)

    } catch (err) {
        res.status(500).send({ err })
    }

}
export const createReserva = async (req, res) => {

    const {idTienda, tipoLocker, idUser, duracion} = req.body
    
    try {
        const lockerReservado = await locker_svc.reservar(idTienda, tipoLocker);

        const idReserva = await svc.createReserva(idUser, duracion, lockerReservado)
        
        res.status(200).json(idReserva)
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

