const router = require('express').Router();

const handlers = require('../handlers/handler');

router.get('/get-users', handlers.getUsers);

router.post('/add', handlers.postAddUser);

module.exports = router;