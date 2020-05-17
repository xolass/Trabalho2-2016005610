const { db } = require('../../database/index');


const update = (id, name, cpf) => {
    const query = `UPDATE Clientes SET Nome = ?, CPF = ? WHERE ID = ?`;
    db().query(query, [name, cpf, id], console.log);
}

module.exports = {
    update,
}