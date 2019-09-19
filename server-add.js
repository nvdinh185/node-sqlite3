const SQLiteDAO = require('./db/sqlite3/sqlite-dao');

const dirDB = 'db';
const dbFile = './' + dirDB + '/mydb.db';

var db = new SQLiteDAO(dbFile);

var express = require("express");
var app = express();
const jsonParser = require("body-parser").json();
var server = require("http").createServer(app);
server.listen(3000, () => console.log("Server is running"));

app.post('/add', jsonParser, (req, res) => {
    let insertTable = {
        name: 'sinhvien',
        cols: [
            {
                name: 'name',
                value: req.body.name
            }
        ]
    };
    db.insert(insertTable)
        .then(data => {
            res.send({ status: "ok", message: "insert thanh cong: " + data });
        })
        .catch(err => {
            res.send({ status: "nok", message: "insert that bai: " + err });
        });
});