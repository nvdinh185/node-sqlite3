const arrObj = require('./util/array-object');

var db = require('./db/sqlite3/db-pool');

const info = {
    id: 1,
    name: ""
}

// db.getRsts(`delete from sinhvien where id = ${1}`) // sử dụng cách này cũng được
db.delete(arrObj.convertSqlFromJson("sinhvien", info))
    .then(data => {
        console.log("Da delete thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });