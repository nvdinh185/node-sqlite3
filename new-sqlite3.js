const sqlite3 = require('sqlite3').verbose();
const dbFile = './db/database/sinhvien.db';

const db = new sqlite3.Database(dbFile);

db.serialize(() => {

    const sql = `CREATE TABLE "nhanvien" (
        "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "hoten"	TEXT
    )`

    //Tạo cơ sở dữ liệu
    db.run(sql);

    // Thêm bản ghi vào cơ sở dữ liệu
    const stmt = db.prepare("INSERT INTO nhanvien (hoten) VALUES (?)");

    for (let i = 1; i < 6; i++) {
        stmt.run("Nhân viên thứ " + i);
    }
    stmt.finalize();

    db.run(`INSERT INTO nhanvien (hoten) VALUES ("Lê Thị Hoa")`);
    db.run(`UPDATE nhanvien SET hoten = ? WHERE id = ?`, "Nguyễn Văn Định", 5);
    db.run(`DELETE FROM nhanvien WHERE id = ${1}`);

    // Lấy dữ liệu theo từng bản ghi
    db.each("SELECT id, hoten FROM nhanvien", (err, row) => {
        console.log(row.id + ": " + row.hoten);
    });

    // Lấy tất cả bản ghi
    db.all("SELECT * FROM nhanvien", (err, row) => {
        console.log(row);
    });
});

db.close();