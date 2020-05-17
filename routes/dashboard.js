var express = require('express');
var router = express.Router();
const { getOne, getAll } = require('../database/tables/Clientes');

/* GET users listing. */
router.get('/', function (req, res, next) {

    const users = getAll();
    res.render('dashboard', {
        title: 'Dashboard',
        users,
    });
});

module.exports = router;
