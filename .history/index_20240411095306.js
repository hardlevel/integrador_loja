const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const { AbstractController, newMethod } = new type(arguments); = require('./src/controllers/abstractController');
const controller = new AbstractController('pinto');
const storeData = require('./src/traits/storeData');
async function main() {

	const newMethod = createDynamicMixin(controller.name);
	//console.log(Object.getPrototypeOf(controller));
	//const store = await storeData(config);
	//console.log(store);
	// function getMethods(obj) {
	// 	const methods = [];
	// 	do {
	// 		for (const prop of Object.getOwnPropertyNames(obj)) {
	// 			if (obj[prop] instanceof Function) methods.push(prop);
	// 		}
	// 		obj = Object.getPrototypeOf(obj);
	// 	} while (obj !== null)

	// 	return methods;
	// }

	// console.log(getMethods(controller));
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


//teste de metodos da classe
//console.log(Object.getPrototypeOf(controller)); // mais simples
function getMethods(obj) {
	const methods = [];
	do {
		for (const prop of Object.getOwnPropertyNames(obj)) {
			if (obj[prop] instanceof Function) methods.push(prop);
		}
		obj = Object.getPrototypeOf(obj);
	} while (obj !== null)

	return methods;
}

console.log(getMethods(controller));