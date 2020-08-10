const arrObj = require('./util/array-object');

var db = require('./db/sqlite3/db-pool');

const info = {
    id: 1,
    name: ""
}

db.delete(arrObj.convertSqlFromJson("sinhvien", info))
    .then(data => {
        console.log("Da delete thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });