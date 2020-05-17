const { db } = require('../../database/index');

const getAll = () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM Clientes`;
    db().query(query, (error, results) => {
        if (error) return reject(error);
        return resolve(results);
    });
})


const getOne = (cpf) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM Clientes WHERE CPF = ?`;

    db().query(query, [cpf], (error, results) => {
        if (error) return reject(error);
        return resolve(results);
    });
})

module.exports = {
    getAll,
    getOne
}