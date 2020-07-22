import {NextApiRequest, NextApiResponse} from 'next'
import sqlite from 'sqlite';

const getAllVehiclesByPersonId = async (req: NextApiRequest, res: NextApiResponse) => {

    const db = await sqlite.open('./mydb.sqlite');
    const vehicles = await db.all(`select * from vehicle where ownerId= ?`, [req.query.id]);

    res.json(vehicles);
}

export default getAllVehiclesByPersonId;