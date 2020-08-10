"use strict"

const SQLiteDAO = require('./sqlite-dao');
const dbFile = './db/database/sinhvien.db';

module.exports = new SQLiteDAO(dbFile);