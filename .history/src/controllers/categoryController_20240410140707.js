const { fetchAll } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {
	const categories = await fetchAll();

}

const saveCategory = async (data) => {

	return category;
}

const categories = { getAllCategories };
module.exports = {
	categories
}