const AbstractModel = require('./abstractModel');
const categoryModel = new AbstractModel("category");

const create = async (data) => {
	const category = await categoryModel.create(data);
	return category;
}

const getAll = async (data) => {
	const products = await productModel.findAll();
	return products;
}

module.exports = { create, getAll };