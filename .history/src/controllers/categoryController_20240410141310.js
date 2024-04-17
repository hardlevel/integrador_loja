const { fetchAll } = require('../api/categories');
const { create, getAll } = require('../models/categoryModel');

const getAllCategories = async () => {
	const categories = await fetchAll();
	await saveCategories(categories);
}

async function saveCategories(categories){
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
			create(data);
		} catch (error) {
			console.log(error);
		}
	})
}

const categories = { getAllCategories };
module.exports = {
	categories
}