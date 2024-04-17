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
				id: product.id,
				slug: product.apelido,
				name: product.name ? product.name : product.apelido,
				sku: product.sku,
				category: product.category,
				status: product.bloqueado ? false : true,
				url: product.url,
				date: new Date()
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