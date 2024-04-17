const { getMethods } = require('./test');

async function main(config){
	const products = new (require('../controllers/abstractController').ControllerFactory.createController('product'))();
	const images = new (require('../controllers/abstractController').ControllerFactory.createController('image'))();
	const categories = new (require('../controllers/abstractController').ControllerFactory.createController('category'))();
	const prices = new (require('../controllers/abstractController').ControllerFactory.createController('price'))();

	const categoryList = await categories.fetch();
	for (const category of categoryList) {
		console.log(category);
		const data = {
			id: category.id,
			desc: category.descricao,
			name: category.nome,
			uri: category.resource_uri,
			external_id: category.id_externo,
			related_category: category.categoria_pai
		};
	};

	const priceList = await prices.fetch();
	for (const price of priceList) {
		console.log(category);
		const data = {
			id: price.id,
			full: price.cheio,
			coust: price.custo,
			product: price.produto,
			uri: price.resource_uri,
			consult: price.sob_consulta,
		}
		await categories.save(data);
	}

	const productList = await products.fetch();
	for (const product of productList) {
			const data = {
				id: item.id,
				slug: item.apelido,
				name: item.name ? item.name : item.apelido,
				sku: item.sku,
				category: item.category,
				status: item.bloqueado ? false : true,
				url: item.url,
				date: new Date()
			}
			await product.save(data);
			const imageList = await images.fetch(product.id);
			for (const image of imageList) {
				const data = {
					id: image.id,
					path: image.caminho,
					product: image.produto,
					cover: image.principal,
					uri: image.resource_uri,
				};

				await images.save(data);
			}
		}
}

module.exports = main;