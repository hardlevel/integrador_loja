const { getAllProducts } = require('../api/products');
const { create, list } = require('../models/product');

//const products = getAllProducts();

async function createProduct(product){

}

async function getAll(config){
	try {
		const products = await getAllProducts();
		return products;
	} catch (error) {
		console.log(error);
	}
}

module.exports = { createProduct, getAll }