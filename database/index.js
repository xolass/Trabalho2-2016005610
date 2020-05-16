const mysql = require('mysql');
const fs = require('fs');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
});

const models = fs.readdirSync(`${__dirname}/tables`)
  .map((files) => files.slice(0, -3))
  .filter((table) => table !== 'index');

const tables = models.map((model) => {
  return require(`./tables/${model}`);
});

db.query(`Create database clientsCrud;`, console.log);

// tables.forEach((table) => {
//   db.query(table.create, console.log);
// })
