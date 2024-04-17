async function main(config){
	const { products } = require(config.controllersPath + '/productController');
	const { categories } = require(config.controllersPath + '/categoryController');
	const { images } = require(config.controllersPath + '/imageController');
	const { prices } = require(config.controllersPath + '/priceController');

	const productList = await products.getAllProducts();
	let imageList = [];
	productList.forEach(async (product) => {
		imageList = await images.getAllImages(product.id);
	})
	console.log(imageList)


}

module.exports = main;
