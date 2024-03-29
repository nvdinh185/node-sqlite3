const sqlite3 = require('sqlite3').verbose();
const dbFile = './db/database/nhanvien.db';

const db = new sqlite3.Database(dbFile);

db.serialize();

(async () => {
    const res = await db.each("SELECT * FROM nhanvien WHERE id = 6");
    console.log("res: ", res);
    const res2 = await db.all("SELECT * FROM nhanvien");
    console.log("res2: ", res2);

    try {
        db.each(`SELECT * FROM nhanvien WHERE id = 6`, function (err, data) {
            if (err) throw new Error(`Lỗi: ${err.message}`);
            console.log("data: ", data);
        })
    } catch (error) {
        console.log("error: ", error);
    } finally {
        console.log("Completed!");
    }

    try {
        const results = await new Promise((resolve, reject) => {
            db.each(`SELECT * FROM nhanvien WHERE id = 6`, function (err, data) {
                if (err) reject(new Error(`Lỗi: ${err.message}`));
                resolve(data);
            })
        })
        console.log("results: ", results);
    } catch (error) {
        console.log("error: ", error);
    } finally {
        db.close();
    }

})();
