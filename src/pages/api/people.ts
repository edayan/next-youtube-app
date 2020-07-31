import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import sqlite from 'sqlite'
import authenticated from '../../../Api/authenticated';

const getPeople = authenticated(async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open('./mydb.sqlite');
    const people = await db.all(`select id, name, email from person`);
    res.json(people);
})

export default getPeople;