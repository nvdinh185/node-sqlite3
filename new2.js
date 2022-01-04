const sqlite3 = require('sqlite3').verbose();
const dbFile = './db/database/nhanvien.db';

const db = new sqlite3.Database(dbFile);

db.serialize();

// hàm chèn một bản ghi ==================================================================================================================================================================
const insertOneRecord = () => new Promise((resolve, reject) => {
    db.run("INSERT INTO nhanvien(hoten) VALUES(?)", ['C123'], function (err) {
        if (err) {
            console.error(err.message);
            reject(new Error(`Lỗi: ${err.message}`));
        }
        console.log(`Rows lastID ${this.lastID}`);
        resolve(this.lastID);
    });
});
insertOneRecord().then(data => console.log("Rows lastID insert: ", data))
    .catch(err => console.log("err: ", err));


(async () => {
    try {
        const res = await new Promise((resolve, reject) => {
            db.run(`INSERT INTO nhanvien(hoten) VALUES(?)`, ['C123456'], function (err) {
                if (err) reject(new Error(`Lỗi: ${err.message}`));
                resolve(this.lastID);
            })
        })
        console.log("res: ", res);
    } catch (error) {
        console.log("error: ", error);
    }

})();

db.close();