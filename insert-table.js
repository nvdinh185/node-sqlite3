const arrObj = require('./util/array-object');

var db = require('./db/sqlite3/db-pool');

const info = {
    id: 1,
    name: "name-insert"
}

// cách này cũng được
var insertData = {
    name: 'sinhvien',
    cols: [
        {
            name: 'name',
            value: "Le Thi Hoa"
        }
    ]
};

// console.log(insertData);
// let InsertSql = arrObj.convertSqlFromJson("sinhvien", info) //cách này cũng được
db.insert(insertData)
    .then(data => {
        console.log("Da insert thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });