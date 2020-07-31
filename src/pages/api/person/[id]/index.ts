import {NextApiRequest, NextApiResponse} from 'next'
import sqlite from "sqlite";

const getPersonById = async (req : NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open('./mydb.sqlite');

    if (req.method === `PUT`) {
        const statement = await  db.prepare(`UPDATE person SET name=?, email =? where id= ?`);
        const result = await statement.run(req.body.name, req.body.email, req.query.id);
        result.finalize();
    }
    const person = await db.get(`select id, name, email from person where id= ?`, [req.query.id]);

    res.json(person);
}

export default getPersonById;