
module.exports = {
  create: `
      CREATE TABLE IF NOT EXISTS Clientes (
      ID int NOT NULL AUTO_INCREMENT,
      Nome varchar(150) NOT NULL,
      CPF char(11) NOT NULL,
      PRIMARY KEY (ID)
    );`
};