const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const { getAll } = require(config.controllersPath + '/productController');

async function main() {
		//await getAll(config);
		away getAllCategories(config;
    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
