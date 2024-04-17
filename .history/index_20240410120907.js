const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const products = { getAllProducts } = require(config.controllersPath + '/productController');
const { createCategory, getAllcategories } = require(config.controllersPath + '/categoryController');

async function main() {
		//await getAll(config);
		await getAllcategories(config);

    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
