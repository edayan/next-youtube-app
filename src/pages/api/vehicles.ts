import {NextApiRequest, NextApiResponse} from 'next'

const getAllVehicles = (req : NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        res.status(500).json({message: 'This method is not accepted'});
    }
    res.json({hello: 'world', method: req.method});
}

export default getAllVehicles;