// models/produtoModel.js
const db = require('../config/db');

// Função para cadastrar um novo produto
exports.cadastrarProduto = async (produto) => {
  const { marca, modelo, cor, preco, descricao } = produto;
  const query = 'INSERT INTO produtos (marca, modelo, cor, preco, descricao) VALUES (?, ?, ?, ?, ?)';
  const values = [marca, modelo, cor, preco, descricao];

  try {
    const [result] = await db.promise().query(query, values);
    return result.insertId; // Retorna o ID do produto inserido
  } catch (error) {
    throw new Error(`Erro ao cadastrar o produto: ${error.message}`);
  }
};
