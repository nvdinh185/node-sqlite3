var db = require('./db/sqlite3/db-pool');

db.getRst("SELECT * FROM sinhvien")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Loi", err);
    });