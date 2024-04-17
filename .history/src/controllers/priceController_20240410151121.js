const { fetchAll } = require('../api/prices');
const PriceModel = require('../models/priceModel');
const price = new PriceModel();

const getAllPrices = async () => {
	const prices = await fetchAll();
	await savePrices(prices);
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
			price.create(data);
		} catch (error) {
			console.log(error);
		}
	})
}

async function findPrice(id){
	try	{
		const response = await price.findById(parseInt(id));
		return response;
	} catch (error) {
		console.log(error);
	}
}


const prices = { getAllPrices, findPrice, savePrices };
module.exports = {
	prices
}