const SQLiteDAO = require('../db/sqlite3/sqlite-dao');

const dirDB = 'db';
const dbFile = './' + dirDB + '/users.db';

var db = new SQLiteDAO(dbFile);

const getUsers = (req, res) => {
    res.send({ status: "ok1", message: "login thanh cong!" });
}

const postAddUser = (req, res) => {
    let postDataString = '';
    req.on('data', (chunk) => {
        postDataString = chunk;
    });
    req.on('end', () => {
        req.json_data = JSON.parse(postDataString);
        try {
            let insertTable = {
                name: 'users',
                cols: [
                    {
                        name: 'username',
                        value: req.json_data.username
                    },
                    {
                        name: 'password',
                        value: req.json_data.password
                    },
                    {
                        name: 'fullname',
                        value: req.json_data.fullname
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
        } catch (err) {
            res.send({ status: "nok", message: "insert that bai: " + err });
        }
    })
}

module.exports = {
    getUsers: getUsers,
    postAddUser: postAddUser
};