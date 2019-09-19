const SQLiteDAO = require('./db/sqlite3/sqlite-dao');
const dirDB = 'db';
const dbFile = './' + dirDB + '/mydb.db';

var db = new SQLiteDAO(dbFile);

var insertTable = {
    name: 'sinhvien',
    cols: [
        {
            name: 'name',
            value: "Le Thi Hoa"
        }
    ]
};

db.insert(insertTable)
    .then(data => {
        console.log("Da them thanh cong!", data);
    })
    .catch(err => {
        console.log("Loi", err);
    });