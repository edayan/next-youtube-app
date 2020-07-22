import {NextApiRequest, NextApiResponse} from 'next'
import sqlite from "sqlite";

const getVehicleById = async (req : NextApiRequest, res: NextApiResponse) => {

    const db = await sqlite.open('./mydb.sqlite');
    const vehicle = await db.get(`select * from vehicle where id= ?`, [req.query.id]);

    res.json(vehicle);
}

export default getVehicleById;