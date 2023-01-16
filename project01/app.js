const { sequelize, Category, Product, Supplier } = require('./models');

const express = require('express');
const app = express();

app.get('/product/:id', (req, res, next) => {
  const { id } = req.params;
  Product.findAll({
    where: { ProductID: id }
  }).then((rs) => {
    res.json(rs);
  });
});

app.use((req, res) => {
  res.status(404).json({ msg: 'path not found' });
});

app.listen(8000, () => console.log('server on 8000'));
