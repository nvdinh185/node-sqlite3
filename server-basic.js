var express = require("express");
var app = express();
var fs = require("fs");
const jsonParser = require("body-parser").json();
var server = require("http").createServer(app);
server.listen(3000, () => console.log("Server is running"));

app.get("/", (req, res) => {
	res.send("<font color=red>Hello World</font>");
});

app.get('/*', (req, res) => {
    fs.readFile(__dirname + req.url, { encoding: 'utf-8', flag: 'r' },
        (error, data) => {
            if (!error) {
                res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
                res.end(data);
            } else {
                res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
                res.end(JSON.stringify(error));
            }
        });
});

app.post('/signin', jsonParser, (req, res) => {
    if (req.body.username == "dinh" && req.body.password == "1234")
        res.send({ status: "ok", message: "login thanh cong!" });
    else
        res.send({ status: "nok", message: "login that bai!" });
});

app.post('/test', jsonParser, (req, res) => {
    console.log(req.body);
    res.send({ status: "ok", message: "login thanh cong!" }); //send ve mot json
    //res.end(JSON.stringify({ status: "ok", message: "login thanh cong!" })); //end ve mot string
});