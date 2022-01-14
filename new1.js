const sqlite3 = require('sqlite3').verbose();
const dbFile = './db/database/nhanvien.db';

const db = new sqlite3.Database(dbFile);

db.serialize();

// db.each("SELECT * FROM nhanvien1 WHERE id = 6", (err, row) => {
//     if (err) console.log("Lỗi: ", err);
//     console.log("data: ", row);
// });


(async () => {
    const res = await db.each("SELECT * FROM nhanvien WHERE id = 6");
    console.log("res: ", res);
    //     try {
    //         const res = await new Promise((resolve, reject) => {
    //             db.run(`INSERT INTO nhanvien(hoten) VALUES(?)`, ['C123456'], function (err) {
    //                 if (err) reject(new Error(`Lỗi: ${err.message}`));
    //                 resolve(this.lastID);
    //             })
    //         })
    //     } catch (error) {
    //         console.log("error: ", error);
    //     }

})();

db.close();