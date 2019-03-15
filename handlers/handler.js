const getUsers = (req, res) => {
    res.send({ status: "ok1", message: "login thanh cong!" });
}

const postUsers = (req, res) => {
    res.send({ status: "ok2", message: "login thanh cong!" });
}

module.exports = {
    getUsers: getUsers,
    postUsers: postUsers
};