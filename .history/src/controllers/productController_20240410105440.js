const { getAllProducts } = require('../api/products');
const { create } = require('../models/product');

//const products = getAllProducts();

async function createProduct(product){
	const products = await getAllProducts();
	products.forEach(product => {
		try {
			create(product);
		} catch (error) {
			console.log(error);
		}
	})
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