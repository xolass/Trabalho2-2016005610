var express = require('express');
var router = express.Router();
const { create } = require('../controllers/users/create');
const { getAll, getOne } = require('../controllers/users/read');
const { update } = require('../controllers/users/update');
const { remove } = require('../controllers/users/remove');



router.get('/', async (req, res) => {

    res.render('dashboard', {
        title: 'Dashboard',
    });
});

router.get('/getAll', async (req, res) => {
    const users = await getAll();

    res.render('dashboard', {
        title: 'Dashboard',
        users,
    });
});


router.post('/', async (req, res) => {
    const { nome, cpf } = req.body;
    await create(nome, cpf);
    res.redirect('/dashboard');
});

router.get('/get', async (req, res) => {
    const { cpf } = req.query;
    const user = await getOne(cpf);

    res.render('dashboard', {
        title: 'Dashboard',
        users: user,
    });
});


router.put('/', async (req, res) => {
    const { id, nome, cpf } = req.body;
    await update(id, nome, cpf);
    res.redirect('/dashboard');
});

router.delete('/', async (req, res) => {
    const { cpf } = req.body;
    await remove(cpf);
    res.redirect('/dashboard');
});

module.exports = router;
