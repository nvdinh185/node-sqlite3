"use strict"

const SQLiteDAO = require('./db/sqlite3/sqlite-dao');

const dirDB = 'db';
const dbFile = './' + dirDB + '/users.db';

var db = new SQLiteDAO(dbFile);

var arrData = [];

db.getRsts("SELECT * FROM users")
    .then(data => {
        arrData = data;
    })
    .catch(err => {
        console.log("Loi", err);
    });

var express = require("express");
var app = express();
var fs = require("fs");
const jsonParser = require("body-parser").json();
var server = require("http").createServer(app);
server.listen(3000, () => console.log("Server is running"));

app.post('/login', jsonParser, (req, res) => {
    let yes = 0;
    arrData.forEach(el => {
        if (req.body.username == el.username) {
            yes = 1;
            return true;
        }
    });
    if (yes == 1) res.send({ status: "ok", message: "login thanh cong!" });
    else res.send({ status: "nok", message: "login that bai!" });
    //res.send({ status: "nok", message: "login that bai!" }); //send ve mot json
    //res.end(JSON.stringify({ status: "ok", message: "login thanh cong!" })); //end ve mot string
});