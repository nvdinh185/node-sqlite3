const SQLiteDAO = require('./db/sqlite3/sqlite-dao');
const dirDB = 'db';
const dbFile = './' + dirDB + '/mydb.db';

var db = new SQLiteDAO(dbFile);

var table = {
    name: 'sinhvien',
    cols: [
        {
            name: 'id',
            type: "INTEGER",
            option_key: 'PRIMARY KEY NOT NULL',
            description: 'day la field duy nhat'
        },
        {
            name: 'name',
            type: "TEXT",
            option_key: 'NOT NULL',
            description: 'Mo ta truong name'
        }
    ]
}

db.createTable(table)
    .then(data => {
        console.log("Tao bang thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });