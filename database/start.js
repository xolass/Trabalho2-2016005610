const { conn, db, tables } = require('./index');

const dbName = process.env.DBNAME;


const createDatabase = () => new Promise((resolve, reject) => {
  conn.query(`Create database ${dbName};`, (error, result) => {
    conn.end();
    if (error) return reject(error);
    return resolve(result);
  });
});

const main = async () => {
  try {
    console.log('Criando Banco de Dados...');
    await createDatabase();
    console.log('Banco de Dados criado');

    return Promise.all(tables.map((table) => {
      return new Promise((resolve, reject) => {
        db().query(table.create, (err, results) => {
          if (err) reject();
          resolve(results);
        });
      });
    })).then(() => {
      console.log('Sucesso');
    });
  } catch (err) {
    if (err.message.includes('database exists')) {
      console.log('Banco de Dados com esse nome já criado');
    } else {
      console.log(err.message);
    }
  }
}

(async () => {
  await main();
  process.exit(0);
})();

