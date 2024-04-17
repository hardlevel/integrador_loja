const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {

	return categories;
}

const categories = { getAllCategories }
module.exports = {
	categories
}