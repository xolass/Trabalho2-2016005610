const { db } = require('../../database/index');


const remove = (id) => {
    const query = `DELETE FROM Clientes WHERE ID = ?`;
    db().query(query, [id], console.log);
}

module.exports = {
    remove,
}