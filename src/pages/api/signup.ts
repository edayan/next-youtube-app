import {NextApiRequest, NextApiResponse} from 'next'
import sqlite from "sqlite";
import {hash} from 'bcrypt';

const signup = async (req : NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open('./mydb.sqlite');

    if (req.method === `POST`) {

        hash(req.body.password, 10,async (err, hash) => {
            const statement = await  db.prepare(`INSERT INTO person(name, email, password) values(?,?,?)`);
            const result = await statement.run(req.body.name, req.body.email, hash);
            result.finalize();
    
            const person = await db.all(`select id, name, email  from person`);
            res.json(person);
        });
        
    } else {
        res.status(405).json({message: `we only support POST`});
    }
    
}

export default signup;