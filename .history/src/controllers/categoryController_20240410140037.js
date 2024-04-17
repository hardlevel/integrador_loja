const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {
	console.log('teste', categoryController.teste('category'));
	return 'pinto';
}

module.exports = {
	getAllCategories
}