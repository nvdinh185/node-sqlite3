const sqlite3 = require('sqlite3').verbose();
const dirDB = 'db';
const dbFile = './' + dirDB + '/mydb.db';

new sqlite3.Database(dbFile, (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to database ' + dbFile);
    }
})