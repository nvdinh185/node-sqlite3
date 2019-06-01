const SQLiteDAO = require('./db/sqlite3/sqlite-dao');

const dirDB = 'db';
const dbFile = './' + dirDB + '/users.db';

var db = new SQLiteDAO(dbFile);

var express = require("express");
var app = express();
var fs = require("fs");
const jsonParser = require("body-parser").json();
var server = require("http").createServer(app);
server.listen(3000, () => console.log("Server is running"));

app.post('/add', jsonParser, (req, res) => {
	console.log("123");
    let insertTable = {
        name: 'users',
        cols: [
            {
                name: 'username',
                value: req.body.username
            },
            {
                name: 'password',
                value: req.body.password
            },
            {
                name: 'fullname',
                value: req.body.fullname
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