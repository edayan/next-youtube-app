import {NextApiRequest, NextApiResponse} from 'next'
import sqlite from "sqlite";

const getAllVehicles = async (req : NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        res.status(500).json({message: 'This method is not accepted'});
    }

    const db = await sqlite.open('./mydb.sqlite');
    const vehicles = await db.all(`select * from vehicle`);


    res.json(vehicles);
}

export default getAllVehicles;