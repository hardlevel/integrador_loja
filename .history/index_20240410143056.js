const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const { fetchAllProducts, getAllProducts } = require(config.controllersPath + '/productController');
const { categories } = require(config.controllersPath + '/categoryController');

async function main() {
		//await fetchAllProducts(config);
		// await categories.getAllCategories(config);
		await categories.findCategory('20459962');

    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
