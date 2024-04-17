//const { products } = require('./src/controllers/productController');
const { modelsPath, controllersPath, apiPath, apiUrl, traitsPath } = require('./config/config');
const { teste } = require(controllersPath + '/productController');

async function main() {
	console.log(apiUrl);
	await teste();
    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
