async function main(config){
	const ImageController = require(config.controllersPath + '/imageController');
	const ProductController = require(config.controllersPath + '/productController');
	// const CategoryController = require(config.controllersPath + '/categoryController');
	// const PriceController = require(config.controllersPath + '/priceController');

	const images = new ImageController('image');
	const product = new ImageController('product');
	images.saveImage('teste');
	// const productList = await products.getAllProducts();
	// let imageList = [];
	// productList.forEach(async (product) => {
	// 	imageList = await images.getAllImages(product.id);
	// })
	// console.log(imageList)


}

module.exports = main;

function getMethods(obj) {
	const methods = [];
	do {
		for (const prop of Object.getOwnPropertyNames(obj)) {
			if (obj[prop] instanceof Function) methods.push(prop);
		}
		obj = Object.getPrototypeOf(obj);
	} while (obj !== null)

	return methods;
}

console.log(getMethods(images));