import {NextApiRequest, NextApiResponse} from 'next'

const getAllVehiclesByPersonId = (req : NextApiRequest, res: NextApiResponse) => {

    res.json({byId: req.query.id, method: 'getAllVehiclesByPersonId'});
}

export default getAllVehiclesByPersonId;