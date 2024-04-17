const AbstractModel = require('./abstractModel');
const categoryModel = new AbstractModel("category");

const create = async (data) => {
	const product = await productModel.create(data);
	return product;
}

const getAll = async (data) => {
	const products = await productModel.findAll();
	return products;
}

module.exports = { create, getAll };