const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');
const AbstractController = require('../controllers/abstractController');
const categoryController = new AbstractController("category");
const getAllCategories = async () => {
	console.log(categoryController.toString());
	return 'pinto';
}

module.exports = {
	getAllCategories
}