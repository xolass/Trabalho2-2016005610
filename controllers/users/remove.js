const { db } = require('../../database/index');


const remove = (cpf) => new Promise((resolve, reject) => {
    const query = `DELETE FROM Clientes WHERE CPF = ?`;
    db().query(query, [cpf], (error, results) => {
        if (error) return reject(error);
        return resolve(results);
    });
});

module.exports = {
    remove,
}