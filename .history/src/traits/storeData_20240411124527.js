const { getMethods } = require('../traits/test');

async function main(config){
	//const ProductController = require(config.controllersPath + '/productController');
	const products = new (require('../controllers/abstractController').ControllerFactory.createController('product'))();
	const images = new (require('../controllers/abstractController').ControllerFactory.createController('image'))();

	//const ImageController = require(config.controllersPath + '/imageController');
	// const CategoryController = require(config.controllersPath + '/categoryController');
	// const PriceController = require(config.controllersPath + '/priceController');

	//const products = new ProductController('product');
	const productList = await products.fetch();
	productList.forEach(async (product) => {
		const imageList = await images.fetch(product.id);
		imageList.forEach(async (image) => {
			const data = {
				id: image.id,
				path: image.caminho,
				product: image.produto,
				cover: image.principal,
				uri: image.resource_uri,
			}
			await images.save(data);
		})
	})

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