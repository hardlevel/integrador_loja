const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {
	console.log('teste');
	return 'pinto';
}

module.exports = {
	getAllCategories
}