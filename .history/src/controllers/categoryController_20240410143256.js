const { fetchAll } = require('../api/categories');
const categoryModel = require('../models/categoryModel');
const category = new categoryModel();

const getAllCategories = async () => {
	const categories = await fetchAll();
	await saveCategories(categories, category);
}

async function saveCategories(categories){
	categories.forEach(item => {
		try {
			const data = {
				id: item.id,
				desc: item.descricao,
				name: item.nome,
				external_id: item.id_externo,
				resource_uri: item.resource_uri,
				url: item.url,
			}
			category.create(data);
		} catch (error) {
			console.log(error);
		}
	})
}

async function findCategory(id){
	try	{
		const response = await category.findById(id);
		return response;
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