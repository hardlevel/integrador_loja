const { config } = require('./config/config');
//const { products } = require('./src/controllers/productController');
const ImageController = require('./src/controllers/imageController');
const controller = new ImageController('image');
const storeData = require('./src/traits/storeData');
async function main() {
	await controller.fetchImage('236681952');
}

main();


//teste de metodos da classe
//console.log(Object.getPrototypeOf(controller)); // mais simples
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