const { fetchAll } = require('../api/categories');
const PriceModel = require('../models/categoryModel');
const prices = new PriceModel();

const getAllPrices = async () => {
	const prices = await fetchAll();
	await savePrices(categories);
}

async function savePrices(prices){
	prices.forEach(item => {
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
		const response = await category.findById(parseInt(id));
		return response;
	} catch (error) {
		console.log(error);
	}
}

async function getCategoryName(id)
{
	try	{
		const response = await category.findById(parseInt(id));
		return response.name;
	} catch (error) {
		console.log(error);
	}
}

async function teste(){

}

const categories = { getAllCategories, findCategory, teste, getCategoryName };
module.exports = {
	categories
}