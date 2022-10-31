/**
 * https://www.sqlitetutorial.net/sqlite-nodejs/insert/
 */

const sqlite3 = require('sqlite3').verbose();
const dbFile = './db/database/nhanvien.db';

const db = new sqlite3.Database(dbFile);

db.serialize();

// Lấy bản ghi với điều kiện WHERE=================================================================================
db.each(`SELECT id, hoten FROM nhanvien WHERE id = ${2}`, (err, row) => {
    console.log(row.id + ": " + row.hoten);
});

// Lấy bản ghi với điều kiện WHERE=================================================================================
(async () => {
    const res = await new Promise((resolve, reject) => {
        const a = 'Nguyễn Văn Định';
        db.each(`SELECT * FROM nhanvien WHERE hoten = '${a}'`, (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })

    console.log(res);

})();

// chèn 1 bản ghi vào table====================================================================================================================================================
db.run(`INSERT INTO nhanvien(hoten) VALUES(?)`, ['C123'], function (err) {
    if (err) {
        return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// chèn nhiều bản ghi=========================================================================================================================================================
let languages = ['C++', 'Python', 'Java', 'C#', 'Go'];
// construct the insert statement with multiple placeholders
// based on the number of rows
let placeholders = languages.map(() => '(?)').join(',');
console.log(placeholders);
let sql = 'INSERT INTO nhanvien(hoten) VALUES ' + placeholders;

// output the INSERT statement
console.log(sql);

db.run(sql, languages, function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Rows inserted1 ${this.changes}`);
});

// hàm chèn nhiều bản ghi ==================================================================================================================================================================
// function insertMultiple() {
const insertMultiple = () => new Promise((resolve, reject) => {
    db.run(sql, languages, function (err) {
        if (err) {
            console.error(err.message);
            reject(new Error(`Lỗi: ${err.message}`));
        }
        console.log(`Rows inserted2 ${this.changes}`);
        resolve(this.changes);
    });
});
insertMultiple().then(data => console.log("number insert: ", data))
    .catch(err => console.log("err: ", err));

// xoa ban ghi ==================================================================================================================================================================
const id = 11;
db.run(`DELETE FROM nhanvien WHERE id > ?`, id, function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row(s) deleted ${this.changes}`);
});
// console.log("number insert : ", insertMultiple());
// select bản ghi =======================================================================================================================================================================
const selectDB = () => new Promise((resolve, reject) => {
    db.each("SELECT * FROM nhanvien WHERE id = 6", (err, row) => {
        if (err) reject(err);
        resolve(row);
    });
});

(async () => {
    try {
        const res = await selectDB();
        console.log(res);
    } catch (error) {
        console.log("Loi: ", error);
    }
})();

db.close();