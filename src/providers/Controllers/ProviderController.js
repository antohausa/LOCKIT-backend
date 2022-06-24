import * as svc from '../Services/ProviderService.js'
import providerDTO from '../Models/Provider.js'

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