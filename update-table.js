const arrObj = require('./util/array-object');

var db = require('./db/sqlite3/db-pool');

const info = {
    id: 1,
    name: "name-update"
}

db.update(arrObj.convertSqlFromJson("sinhvien", info))
    .then(data => {
        console.log("Da update thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });