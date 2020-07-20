import {NextApiRequest, NextApiResponse} from 'next'

const getVehicleById = (req : NextApiRequest, res: NextApiResponse) => {
    res.json({byId: req.query.id, method: 'getVehicleById'});
}

export default getVehicleById;