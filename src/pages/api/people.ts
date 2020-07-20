import {NextApiRequest, NextApiResponse} from 'next'

const getPeople = (req : NextApiRequest, res: NextApiResponse) => {

    res.json([{name: 'bruno'}, {name: 'Saju'}]);
}

export default getPeople;