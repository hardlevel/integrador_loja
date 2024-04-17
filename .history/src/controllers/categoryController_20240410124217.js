const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');
const categorController = new AbstractController("category");
const getAllCategories = async () => {
	return 'pinto';
}

module.exports = {
	getAllCategories
}