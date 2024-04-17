const { fetchAll } = require('../api/categories');
const categoryModel = require('../models/categoryModel');
const category = new categoryModel();

const getAllCategories = async () => {
	const categories = await fetchAll();
	await saveCategories(categories, category);
}

async function saveCategories(categories, model){
	categories.forEach(category => {
		try {
			const data = {
				id: category.id,
				desc: category.descricao,
				name: category.nome,
				external_id: category.id_externo,
				resource_uri: category.resource_uri,
				url: category.url,
			}
			model.create(data);
		} catch (error) {
			console.log(error);
		}
	})
}

async function findCategory(id){
	try	{
		const category = await find(id);
		return category;
	} catch (error) {
		console.log(error);
	}
}

async function teste(){

}

const categories = { getAllCategories, findCategory, teste };
module.exports = {
	categories
}