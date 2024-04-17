//const { products } = require('./src/controllers/productController');
const { config } = require('./config/config');
//const { teste } = require(controllersPath + '/productController')(apiUrl);

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
