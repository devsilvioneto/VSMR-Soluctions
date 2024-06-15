// server.js
const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Rota base para todas as rotas definidas em routes/index.js
app.use('/api', routes);

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
