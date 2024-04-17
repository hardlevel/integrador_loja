const { getAllProducts } = require('../api/products');
//const { create, list } = require('../models/product');

const products = await getAllProducts();

async function createProduct(product){

}

async function getAll(config){
	console.log
}

module.exports = { createProduct, getAll }