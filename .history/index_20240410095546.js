const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const { teste } = require(config.controllersPath + '/productController');

async function main() {
	console.log(config);
	//await teste(apiUrl);
    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
