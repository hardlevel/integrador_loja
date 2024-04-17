async function getMethods(obj) {
	//console.log(Object.getPrototypeOf(controller)); // mais simples
	const methods = [];
	do {
		for (const prop of Object.getOwnPropertyNames(obj)) {
			if (obj[prop] instanceof Function) methods.push(prop);
		}
		obj = Object.getPrototypeOf(obj);
	} while (obj !== null)

	return methods;
}

module.exports = { getMethods };