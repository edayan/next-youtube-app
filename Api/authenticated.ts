import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import sqlite from 'sqlite'
import { verify } from 'jsonwebtoken';
import { secret } from './secret';

const authenticated = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {

   // const auth = req.headers.authorization;
    const auth = req.cookies.authorization;
    verify(auth, secret, async (err, decoded) => {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(401).json({ message: `You are not authenticated` });

    });

}

export default authenticated;