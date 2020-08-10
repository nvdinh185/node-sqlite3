var sqlite3 = require('sqlite3').verbose();
const dbFile = './db/database/sinhvien.db';

var db = new sqlite3.Database(dbFile);

db.serialize(() => {

    let sql = `CREATE TABLE "nhanvien" (
        "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "hoten"	TEXT
    )`

    //Tạo cơ sở dữ liệu
    db.run(sql);

    // Thêm dữ liệu vào cơ sở dữ liệu
    var stmt = db.prepare("INSERT INTO nhanvien (hoten) VALUES (?)");

    for (var i = 1; i < 6; i++) {
        stmt.run("Nhân viên thứ " + i);
    }
    stmt.finalize();

    db.run(`INSERT INTO nhanvien (hoten) VALUES ("Lê Thị Hoa")`);
    db.run(`UPDATE nhanvien SET hoten = ? WHERE id = ?`, "Nguyễn Văn Định", 5);
    db.run(`DELETE FROM nhanvien WHERE id = ${1}`);

    // Lấy dữ liệu
    db.each("SELECT id, hoten FROM nhanvien", (err, row) => {
        console.log(row.id + ": " + row.hoten);
    });
});

db.close();