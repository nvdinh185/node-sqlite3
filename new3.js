const sqlite3 = require('sqlite3').verbose();
const dbFile = './db/database/nhanvien.db';
const util = require('util');

const db = new sqlite3.Database(dbFile);
const run = util.promisify(db.run).bind(db);
const all = util.promisify(db.all).bind(db);

db.serialize();

(async () => {

    try {
        await run(`INSERT INTO nhanvien (hoten) VALUES ("Lê Thị Hồng")`);

        await run(`INSERT INTO nhanvien (hoten) VALUES ("Lê Thị Hương")`);

        let data = await all(`SELECT * FROM nhanvien`);
        console.log(data);
    } catch (error) {
        console.log("error: ", error);
    } finally {
        db.close();
        console.log("Completed!");
    }

})();
