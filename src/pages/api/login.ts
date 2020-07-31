import { NextApiRequest, NextApiResponse } from 'next'
import sqlite from "sqlite";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { secret } from '../../../Api/secret';
import cookie from 'cookie';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open('./mydb.sqlite');

    if (req.method === `POST`) {
        const person = await db.get(`select id, name, email, password from person where email =?`, [req.body.email]);

        if(!person) {
            return res.status(401).json({ message: `invalid credentials` });
        }
        console.log(`person`, person);
        compare(req.body.password, person.password, (err, result) => {
            console.log('result', result);
            if (!err && result) {
                const claims = { sub: person.id, myPersonEmail: person.email }
                const jwt = sign(claims, secret, { expiresIn: '1h' });

                res.setHeader('Set-Cookie', cookie.serialize('authorization', jwt, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/'
                }));

                //res.json({ authToken: jwt });
                res.json({ message: 'authenticated' });
            } else {
                res.status(401).json({ message: `invalid credentials` });
            }


        });

    } else {
        res.status(405).json({ message: `we only support POST` });
    }

}

export default login;