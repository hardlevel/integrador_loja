const { getAllProducts } = require('../api/products');
//const { create, list } = require('../models/product');

const products = await getAllProducts();

async function createProduct(product){

}

module.exports = { createProduct, getAll }