const { fetchAll } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {
	const categories = await fetchAll();
	return categories;
}

const categories = { getAllCategories };
module.exports = {
	categories
}