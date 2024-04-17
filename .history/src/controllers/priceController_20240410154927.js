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
				full: item.cheio,
				coust: item.custo,
				product: item.produto,
				uri: item.resource_uri,
				consult: item.sob_consulta,
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