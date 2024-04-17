const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {

	return categories;
}

module.exports = {
	categories: {getAllCategories}
}