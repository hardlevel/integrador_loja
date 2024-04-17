const { getMethods } = require('./test');

async function main(config){
	const types = {
		data: [{
			controller: 'product',
			fields: {
				id: 'id',
				apelido: 'slug',
				nome: 'name',
				sku: 'sku',
				categorias: 'category',
				bloqueado: 'status',
				url: 'url',
				date: 'date'
			},
			child:
				{
					controller: 'image',
					fields: {
						id:'id',
						caminho:'path',
						produto:'product',
						principal:'cover',
						resource_uri:'uri',
					}
				},

		},
		{
			controller: 'category',
			fields: {
				id: 'id',
				descricao: 'desc',
				nome: 'name',
				resource_uri: 'uri',
				id_externo: 'external_id',
				categoria_pai: 'related_category'
			}
		},
		{
			controller: 'price',
			fields: {
			id: 'id',
			cheio: 'full',
			custo: 'coust',
			produto: 'product',
			resource_uri: 'uri',
			sob_consulta: 'consult',
			}
		}
	]}


	// const products = new (require('../controllers/abstractController').ControllerFactory.createController('product'))();
	// const images = new (require('../controllers/abstractController').ControllerFactory.createController('image'))();
	// const categories = new (require('../controllers/abstractController').ControllerFactory.createController('category'))();
	// const prices = new (require('../controllers/abstractController').ControllerFactory.createController('price'))();

	const init = async (types) => {
		// console.log(types.data);
		for(const type of types.data){
			await setData(type);
		}
		// for(const typeName in types){
		// 	console.log(typeName);
		// }
	}

	const setData = async (type, id = null) => {
		const controller = new (require('../controllers/abstractController').ControllerFactory.createController(type.controller))();
		const fields = type.fields;
		const child = type.child;
		const data = await controller.fetch(id);

		await proccessData(controller, data, fields, child);
	}

	const proccessData = async (controller, data, fields, related = null) => {
		for (const item of data) {
			const mapping = {};
			// console.log(item.id);
			for(const field in fields){
				if (item.hasOwnProperty(field)){
					let inputData = '';
					if (typeof item[field] == 'object'){
						inputData = JSON.stringify(item[field]);
					} else if (item[field] == null){
						inputData = '';
					} else {
						inputData = item[field];
					}
					mapping[fields[field]] = inputData;
				}
			}
			await controller.save(mapping);
			if (child) {
				await setData(child, item.id);
			}
		};
	}

	await init(types);
	//await checkTypes(types);
	//await fetchData(types.categories);
	//console.log(types.data);
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