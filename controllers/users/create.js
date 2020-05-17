const { db } = require('../../database/index');


const create = (name, cpf) => new Promise((resolve, reject) => {
    const query = `INSERT INTO Clientes VALUES (?, ?, ?)`;
    db().query(query, [null, name, cpf], (error, results) => {
        if (error) return reject(error);
        return resolve(results);
    });
});

module.exports = {
    create,
}