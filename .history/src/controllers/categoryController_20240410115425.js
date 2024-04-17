const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategorries = async () => {
	return categories;
}

module.exportes = {
	getAllCategorries
}