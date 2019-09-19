const SQLiteDAO = require('./db/sqlite3/sqlite-dao');
const dirDB = 'db';
const dbFile = './' + dirDB + '/mydb.db';

var db = new SQLiteDAO(dbFile);

var updateTable = {
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


db.update(updateTable)
    .then(data => {
        console.log("Da update thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });