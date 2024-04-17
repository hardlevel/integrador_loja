const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const AbstractController = require('./src/controllers/abstractController');
const controller = new AbstractController('teste');

async function main() {
	console.log(controller.teste())
	for (const metodo in controller) {
		if (typeof objeto[metodo] === "function") {
			console.log(metodo);
		}
	}
		// await products.fetchAllProducts(config);
		// await categories.getAllCategories(config);
		//await categories.getCategoryName('20459962');
		// await images.getAllImages('236681952');
		//await images.getAllImages('256601993');
    // try {
    //     await syncProducts();
    // } catch (error) {
    //     console.error('Erro no processo principal:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}

main();
