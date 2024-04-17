const { getAllProducts } = require('../api/products');
const { create } = require('../models/productModel');

//const products = getAllProducts();

async function createProduct(product){
	const products = await getAllProducts();
	products.forEach(product => {
		try {
			const data = {
				id: product.id,
				slug: product.apelido,
				name: product.name,
				sku: product.sku,
				category: product.category,
				status: product.bloqueado ? false : true,
				url: product.url
			}
			create(data);
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