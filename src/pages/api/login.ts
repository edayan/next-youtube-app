import { NextApiRequest, NextApiResponse } from 'next'
import sqlite from "sqlite";
import { compare } from 'bcrypt';
import {sign } from 'jsonwebtoken';
import {secret} from '../../../Api/secret';
const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open('./mydb.sqlite');

    if (req.method === `POST`) {
        const person = await db.get(`select id, name, email, password from person where email =?`, [req.body.email]);
        console.log(`person`, person);
        compare(req.body.password, person.password, (err, result) => {
            console.log('result', result);
            if (!err && result) {
                const claims  = {sub: person.id, myPersonEmail: person.email}
                const jwt = sign(claims, secret, {expiresIn : '1h'});
                res.json({ authToken: jwt });
            } else {
                res.json({ message: `something went wrong` });
            }


        });

    } else {
        res.status(405).json({ message: `we only support POST` });
    }

}

export default login;