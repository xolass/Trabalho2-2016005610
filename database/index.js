const mysql = require('mysql');
const fs = require('fs');

require('dotenv').config();


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
  database: process.env.DBNAME
});

const models = fs.readdirSync(`${__dirname}/tables`)
  .map((files) => files.slice(0, -3))
  .filter((table) => table !== 'index');

const tables = models.map((model) => {
  return require(`./tables/${model}`);
});

module.exports = {
  conn, db, tables
};