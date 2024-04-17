const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {
	console.log('teste');
	return categories;
}

const categories = { getAllCategories };
module.exports = {
	categories
}