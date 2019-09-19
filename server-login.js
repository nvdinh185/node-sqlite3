const SQLiteDAO = require('./db/sqlite3/sqlite-dao');

const dirDB = 'db';
const dbFile = './' + dirDB + '/mydb.db';

var db = new SQLiteDAO(dbFile);

var express = require("express");
var app = express();
var fs = require("fs");
const jsonParser = require("body-parser").json();
var server = require("http").createServer(app);
server.listen(3000, () => console.log("Server is running"));

app.post('/login', jsonParser, (req, res) => {
    var promise = new Promise((resolve, reject) => {
        db.getRsts("SELECT * FROM sinhvien")
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    })
    promise.then(data => {
        let yes = 0;
        data.forEach(el => {
            if (req.body.name == el.name) {
                yes = 1;
                res.send({ status: "ok", message: "login thanh cong!" });
                return true;
            }
        });
        if (yes == 0) res.send({ status: "nok", message: "login that bai!" });
    })
        .catch(err => {
            console.log(err);
        })
});