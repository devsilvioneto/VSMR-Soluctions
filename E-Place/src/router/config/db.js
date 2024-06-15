// config/db.js
const mysql = require('mysql2');

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario_mysql',
  password: 'sua_senha_mysql',
  database: 'nome_do_banco_de_dados'
});

module.exports = connection;
