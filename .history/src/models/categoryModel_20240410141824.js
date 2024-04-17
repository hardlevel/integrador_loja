const AbstractModel = require('./abstractModel');
const categoryModel = new AbstractModel("category");

// const create = async (data) => {
// 	const category = await categoryModel.create(data);
// 	return category;
// }

// const getAll = async (data) => {
// 	const categories = await categoryModel.findAll();
// 	return categories;
// }

module.exports = { create, getAll, find };