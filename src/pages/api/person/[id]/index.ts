import {NextApiRequest, NextApiResponse} from 'next'

const getPersonById = (req : NextApiRequest, res: NextApiResponse) => {
    res.json({byId: req.query.id, method: 'getPersonById'});
}

export default getPersonById;