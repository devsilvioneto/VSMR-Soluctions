// controllers/produtoController.js
const produtoModel = require('../models/produtoModel');

// Controlador para cadastrar um novo produto
exports.cadastrarProduto = async (req, res) => {
  const produtoData = req.body;

  try {
    const productId = await produtoModel.cadastrarProduto(produtoData);
    res.status(201).json({ message: 'Produto cadastrado com sucesso!', productId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
