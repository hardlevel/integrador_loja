const { getMethods } = require('../traits/test');

async function main(config){
	const ImageController = require(config.controllersPath + '/imageController');
	//const ProductController = require(config.controllersPath + '/productController');
	// const CategoryController = require(config.controllersPath + '/categoryController');
	// const PriceController = require(config.controllersPath + '/priceController');


	const images = new ImageController('image');
	//const product = new ImageController('product');
	const imagesList = await images.fetch('236681952');
	imagesList.forEach(image => {
		const data = {
			id,
			path: image.caminho,
			product: image.produto,
			cover: image.principal,
			uri: image.resource_uri,
		}
		images.save(image);
	})
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