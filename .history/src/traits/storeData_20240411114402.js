const { getMethods } = require('../traits/test');
const { ModelFactory } = require('../models/abstractModel');
const ImageModel = ModelFactory.createModel('image');
async function main(config){
	//const ImageController = require(config.controllersPath + '/imageController');
	//const ProductController = require(config.controllersPath + '/productController');
	// const CategoryController = require(config.controllersPath + '/categoryController');
	// const PriceController = require(config.controllersPath + '/priceController');
	console.log(getMethods(ImageModel));
	//const images = new ImageController('image');
	//const product = new ImageController('product');
	//images.saveImage('teste');
	//console.log(await getMethods(images));
	// const productList = await products.getAllProducts();
	// let imageList = [];
	// productList.forEach(async (product) => {
	// 	imageList = await images.getAllImages(product.id);
	// })
	// console.log(imageList)


}

module.exports = main;