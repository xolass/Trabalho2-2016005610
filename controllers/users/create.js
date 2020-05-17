const { db } = require('../../database/index');


const create = (name, cpf) => {
    const query = `INSERT INTO Clientes VALUES (?, ?, ?)`;
    db().query(query, [null, name, cpf], (error, results, fields) => {
        console.log(error, results, fields);
    });
}

module.exports = {
    create,
}