const AbstractModel = require('./abstractModel');
const categoryModel = new AbstractModel("category");

const create = categoryModel.create(data);
// const create = async (data) => {
// 	const category = await categoryModel.create(data);
// 	return category;
// }

// const getAll = async (data) => {
// 	const categories = await categoryModel.findAll();
// 	return categories;
// }

module.exports = { create, getAll, find };