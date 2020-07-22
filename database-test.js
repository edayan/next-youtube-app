const sqlite = require('sqlite');

async function setup() {
    try {
        const db = await sqlite.open('./mydb.sqlite');
        await db.migrate({force: 'last'});

        const people = await db.all(`SELECT * FROM Person`);
        console.log(`ALL PEOPLE `, JSON.stringify(people, null, 2));

        const vehicles = await db.all(`SELECT * FROM Vehicle`);
        console.log(`ALL VEHICLES `, JSON.stringify(vehicles, null, 2));
    }catch (e) {
        console.error(e)
    }


}

setup();