const router = require('express').Router();

const handlers = require('../handlers/handler');

router.get('/users', handlers.getUsers);

router.post('/users', handlers.postUsers);

module.exports = router;