const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const { fetchAllProducts, getAllProducts } = require(config.controllersPath + '/productController');
const { categories } = require(config.controllersPath + '/categoryController');
const { images } = require(config.controllersPath + '/imageController');
const { prices } = require(config.controllersPath + '/priceController');

async function main() {
		//await fetchAllProducts(config);
		// await categories.getAllCategories(config);
		//await categories.getCategoryName('20459962');
		await prices.getAllImages('236681952');
    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
