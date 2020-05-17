const { db } = require('../../database/index');

const getAll = () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM Clientes`;
    db().query(query, (error, results, fields) => {
        console.log(error,
            results,
            fields);
        if (error) return reject(error);
        return resolve(results);
    });
})


const getOne = (id) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM Clientes WHERE id = ?`;

    db().query(query, [id], (error, results, fields) => {
        console.log(error,
            results,
            fields);
        if (error) return reject(error);
        return resolve(results);
    });
})

module.exports = {
    getAll,
    getOne
}