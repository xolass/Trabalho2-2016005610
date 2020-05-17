var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post("/registra", function (req, res, next) {
    const { name, cpf } = req.body;


    var rp = require('request-promise');

    rp({
        method: 'POST',
        uri: 'http://localhost:3000/clientes',
        body: {
            nome: name,
            cpf: cpf
        },
        json: true // Automatically stringifies the body to JSON        
    }).then(function (parsedBody) {
        console.log(parsedBody);
        // POST succeeded...
        res.render("registrado", {
            title: "Você está registrado",
            name,
            cpf
        });
    })
        .catch(function () {
            // POST failed...
            res.render("naoregistrado", {
                title: "Você não está registrado",
                name,
                cpf
            });
        });

});


module.exports = router;