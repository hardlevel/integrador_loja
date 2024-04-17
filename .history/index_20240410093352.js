//const { products } = require('./src/controllers/productController');
const { modelsPath, controllersPath } = require('./config/config');
const { teste } = require(controllersPath + '/productsController');

async function main() {
	console.log();
    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
