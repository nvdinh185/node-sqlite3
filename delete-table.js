const SQLiteDAO = require('./db/sqlite3/sqlite-dao');
const dirDB = 'db';
const dbFile = './' + dirDB + '/mydb.db';

var db = new SQLiteDAO(dbFile);

var deleteTable = {
    name: 'sinhvien',
    cols: [{
        name: 'name',
        value: 'Nguyen Van Dinh'
    }],
    wheres: [{
        name: 'id',
        value: 1
    }]
}

db.delete(deleteTable)
    .then(data => {
        console.log("Da delete thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });