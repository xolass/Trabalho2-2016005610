var express = require('express');
var router = express.Router();
const { create } = require('../controllers/users/create');
const { getAll, getOne } = require('../controllers/users/read');
const { update } = require('../controllers/users/update');
const { remove } = require('../controllers/users/remove');
/* GET users listing. */
router.post('/', async (req, res) => {
    const { nome, cpf } = req.body;
    create(nome, cpf);
    res.send('');
});

router.get('/all', async (req, res) => {
    const users = await getAll();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await getOne(id);
    res.json(user);
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf } = req.body;
    const users = await update(id, nome, cpf);
    res.json(users);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    remove(id);
    res.send('');
});

module.exports = router;
