const ImageController = require(config.controllersPath + 'imageController');

async function main(config){

	const controller = new ImageController('image');

	// const productList = await products.getAllProducts();
	// let imageList = [];
	// productList.forEach(async (product) => {
	// 	imageList = await images.getAllImages(product.id);
	// })
	// console.log(imageList)


}

module.exports = main;
