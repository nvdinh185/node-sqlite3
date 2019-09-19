const SQLiteDAO = require('./db/sqlite3/sqlite-dao');
const dirDB = 'db';
const dbFile = './' + dirDB + '/mydb.db';

var db = new SQLiteDAO(dbFile);

db.getRsts("SELECT * FROM sinhvien")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Loi", err);
    });