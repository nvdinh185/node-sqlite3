const sqlite3 = require('sqlite3').verbose();
const dbFile = './db/database/sinhvien.db';

const db = new sqlite3.Database(dbFile);

db.serialize(() => { });

// Thêm bản ghi vào cơ sở dữ liệu
// const stmt = db.prepare("INSERT INTO nhanvien (hoten) VALUES (?)");

// for (let i = 1; i < 6; i++) {
//     stmt.run("Nhân viên thứ " + i);
// }
// stmt.finalize();

// db.run(`INSERT INTO nhanvien (hoten) VALUES ("Lê Thị Hoa")`);
// db.run(`UPDATE nhanvien SET hoten = ? WHERE id = ?`, "Nguyễn Văn Định", 25);
// db.run(`DELETE FROM nhanvien WHERE id = ${19}`);

// Lấy bản ghi với điều kiện WHERE
db.each(`SELECT id, hoten FROM nhanvien WHERE id = ${20}`, (err, row) => {
    console.log(row.id + ": " + row.hoten);
});

// Lấy tất cả bản ghi
(async () => {
    const res = await new Promise((resolve, reject) => {
        const a = 'abc';
        const b = 20;
        // db.each(`SELECT * FROM nhanvien WHERE id = ${b}`, (err, row) => {
        db.each(`SELECT * FROM nhanvien WHERE hoten = '${a}'`, (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })

    console.log(res);

})();

// Lấy dữ liệu theo từng bản ghi
// db.each("SELECT id, hoten FROM nhanvien", (err, row) => {
//     console.log(row.id + ": " + row.hoten);
// });

// Lấy tất cả bản ghi
// db.all("SELECT * FROM nhanvien", (err, row) => {
//     console.log(row);
// });


db.close();