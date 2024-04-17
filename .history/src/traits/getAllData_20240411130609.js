const { getMethods } = require('./test');

async function main(config){
	//const ProductController = require(config.controllersPath + '/productController');
	const products = new (require('../controllers/abstractController').ControllerFactory.createController('product'))();
	const images = new (require('../controllers/abstractController').ControllerFactory.createController('image'))();
	const categories = new (require('../controllers/abstractController').ControllerFactory.createController('category'))();
	const prices = new (require('../controllers/abstractController').ControllerFactory.createController('price'))();
	//const ImageController = require(config.controllersPath + '/imageController');
	// const CategoryController = require(config.controllersPath + '/categoryController');
	// const PriceController = require(config.controllersPath + '/priceController');

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
	//const products = new ProductController('product');
	const productList = await products.fetch();
	for (const product of productList) {
		// const imageList = await images.fetch(product.id);
		// for (const image of imageList) {
		// 	const data = {
		// 		id: image.id,
		// 		path: image.caminho,
		// 		product: image.produto,
		// 		cover: image.principal,
		// 		uri: image.resource_uri,
		// 	};

		// 	await images.save(data);
		// }


		}
	//console.log(productList);
	//const images = new ImageController('image');
	//const product = new ImageController('product');
	// const imagesList = await images.fetch('236681952');
	// imagesList.forEach(image => {
	// 	const data = {
	// 		id: image.id,
	// 		path: image.caminho,
	// 		product: image.produto,
	// 		cover: image.principal,
	// 		uri: image.resource_uri,
	// 	}
	// 	images.save(data);
	// })
	//console.log(imagesList);
	//console.log(await getMethods(images));
	// const productList = await products.getAllProducts();
	// let imageList = [];
	// productList.forEach(async (product) => {
	// 	imageList = await images.getAllImages(product.id);
	// })
	// console.log(imageList)


}

module.exports = main;