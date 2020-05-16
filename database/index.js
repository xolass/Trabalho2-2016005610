const mysql = require('mysql');
const fs = require('fs');

const dbName = process.argv[2];

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
});

const db = () => mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: dbName
});

const models = fs.readdirSync(`${__dirname}/tables`)
  .map((files) => files.slice(0, -3))
  .filter((table) => table !== 'index');

const tables = models.map((model) => {
  return require(`./tables/${model}`);
});

const createDatabase = () => new Promise((resolve, reject) => {
  conn.query(`Create database ${dbName};`, (error, result) => {
    if (error) return reject(error);
    return resolve(result);
  });
});

const main = async () => {
  try {
    await createDatabase();

    tables.forEach((table) => {
      db().query(table.create, console.log);
    });
  } catch (err) {

    if (err.message.includes('database exists')) {
      console.log('Banco de Dados com esse nome já criado');
    } else {
      console.log(err.message);
    }
  }
}

main().then(() => process.exit(0)).catch(console.log);

