const { config } = require('./config/config');
const storeData = require('./src/traits/getAllData');
async function main() {
	await getData(config);
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