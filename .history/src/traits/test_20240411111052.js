async function getMethods(obj) {
	const methods = [];
	do {
		for (const prop of Object.getOwnPropertyNames(obj)) {
			if (obj[prop] instanceof Function) methods.push(prop);
		}
		obj = Object.getPrototypeOf(obj);
	} while (obj !== null)

	return methods;
}

module.exports = getMethods;