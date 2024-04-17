const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const { getAllProducts } = require(config.controllersPath + '/productController');
const { createCategory, getAllCategories } = require(config.controllersPath + '/categoryController');

async function main() {
		await fetchAllProducts(config);
		await getAllCategories(config);

    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
