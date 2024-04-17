const { fetchAllCategories } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');
const AbstractController = require('../controllers/abstractController');
const categorController = new AbstractController("category");
const getAllCategories = async () => {
	console.log(AbstractController.createCategory());
	return 'pinto';
}

module.exports = {
	getAllCategories
}