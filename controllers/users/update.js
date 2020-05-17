const { db } = require('../../database/index');


const update = (id, name, cpf) => new Promise((resolve, reject) => {
    const query = `UPDATE Clientes SET Nome = ?, CPF = ? WHERE ID = ?`;
    db().query(query, [name, cpf, id], (error, results) => {
        if (error) return reject(error);
        return resolve(results);
    });
})

module.exports = {
    update,
}