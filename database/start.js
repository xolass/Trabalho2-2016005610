const { conn, db, tables } = require('./index');


const createDatabase = () => new Promise((resolve, reject) => {
  console.log(process.env.DBNAME);
  conn.query(`Create database ${process.env.DBNAME};`, (error, result) => {
    conn.end();
    if (error) return reject(error);
    return resolve(result);
  });
});

const main = async () => {
  try {
    console.log('Criando Banco de Dados...');
    await createDatabase();
    console.log('Banco de Dados criado\n\n');

    return Promise.all(tables.map((table) => {
      console.log(`Criando Tabela ${table.name}...`);
      return new Promise((resolve, reject) => {
        db().query(table.create, (err, results) => {
          if (err) reject();
          resolve(results);
          console.log(`Tabela ${table.name} criada\n\n`);
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

