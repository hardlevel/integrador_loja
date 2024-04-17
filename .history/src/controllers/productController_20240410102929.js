const { getAllProducts } = require('../api/products');
//const { create, list } = require('../models/product');

//const products = getAllProducts();

async function createProduct(product){

}

async function getAll(config){
	console.log("chegou aqui");
	try {
		const products = await getAllProducts();
		console.log("products");
	} catch (error) {

	}
}

module.exports = { createProduct, getAll }