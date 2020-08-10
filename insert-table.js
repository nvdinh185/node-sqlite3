const arrObj = require('./util/array-object');

var db = require('./db/sqlite3/db-pool');

const info = {
    id: 1,
    name: "name-insert"
}

db.insert(arrObj.convertSqlFromJson("sinhvien", info))
    .then(data => {
        console.log("Da insert thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });