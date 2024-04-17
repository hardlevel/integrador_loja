const { getMethods } = require('./test');

async function main(config){
	const types = {
		products: {
			controller: new (require('../controllers/abstractController').ControllerFactory.createController('product'))(),
			data: {
				id: 'product.id',
				slug: 'product.apelido',
				name: 'product.name ? product.name : product.apelido',
				sku: 'product.sku',
				category: 'product.category',
				status: 'product.bloqueado ? false : true',
				url: 'product.url',
				date: 'new Date()'
			}
		},
		categories: new (require('../controllers/abstractController').ControllerFactory.createController('category'))(),
		data: {
			id: 'category.id',
			desc: 'category.descricao',
			name: 'category.nome',
			uri: 'category.resource_uri',
			external_id: 'category.id_externo',
			related_category: 'category.categoria_pai'
		}
	}


	// const products = new (require('../controllers/abstractController').ControllerFactory.createController('product'))();
	// const images = new (require('../controllers/abstractController').ControllerFactory.createController('image'))();
	// const categories = new (require('../controllers/abstractController').ControllerFactory.createController('category'))();
	// const prices = new (require('../controllers/abstractController').ControllerFactory.createController('price'))();

	const fetchData = async (type) => {
		console.log(type);
		const list = await type.fetch();
	}

	const proccessData = async (data) => {
		for (const item of data) {
			await categories.save(data);
		};
	}

	await fetchData(types.categories);
	// const categoryList = await categories.fetch();
	// for (const category of categoryList) {
	// 	const data = {
	// 		id: category.id,
	// 		desc: category.descricao,
	// 		name: category.nome,
	// 		uri: category.resource_uri,
	// 		external_id: category.id_externo,
	// 		related_category: category.categoria_pai
	// 	};
	// 	await categories.save(data);
	// };

	// const priceList = await prices.fetch();
	// for (const price of priceList) {
	// 	const data = {
	// 		id: price.id,
	// 		full: price.cheio,
	// 		coust: price.custo,
	// 		product: price.produto,
	// 		uri: price.resource_uri,
	// 		consult: price.sob_consulta,
	// 	}
	// 	await prices.save(data);
	// }

	// const productList = await products.fetch();
	// for (const product of productList) {
	// 		const data = {
	// 			id: product.id,
	// 			slug: product.apelido,
	// 			name: product.name ? product.name : product.apelido,
	// 			sku: product.sku,
	// 			category: product.category,
	// 			status: product.bloqueado ? false : true,
	// 			url: product.url,
	// 			date: new Date()
	// 		}
	// 		await products.save(data);

	// 		const imageList = await images.fetch(product.id);
	// 		for (const image of imageList) {
	// 			const data = {
	// 				id: image.id,
	// 				path: image.caminho,
	// 				product: image.produto,
	// 				cover: image.principal,
	// 				uri: image.resource_uri,
	// 			};

	// 			await images.save(data);
	// 		}
	// 	}
}

module.exports = main;