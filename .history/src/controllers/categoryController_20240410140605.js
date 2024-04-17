const { fetchAll } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {
	const categories = await fetchAll();
	console.log(categories);
	return categories;
}

const categories = { getAllCategories };
module.exports = {
	categories
}