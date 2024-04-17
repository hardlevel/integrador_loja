class AbstractController {
	constructor(name){
		console.log('abstract', name);
		this.name = name;
	}
}

function createMethods(name, options = {}) {
	const modelName = capitalizeFirstLetter(name);

	AbstractController.prototype['fetch' + modelName] = function(id = null) {
		console.log('id recebida', id);
		console.log(__dirname);
		const { fetchAll } = require('../api/' + name);
		const data = fetchAll(id);
		return data;
	};

	AbstractController.prototype['save' + modelName] = function() {
		console.log(`${methodName} entrando`);
	};


	AbstractController.prototype['getById' + modelName] = function() {
		console.log(`${methodName} entrando`);
	};

	AbstractController.prototype['getAll' + modelName] = function() {
		console.log(`${methodName} entrando`);
	};

	AbstractController.prototype['delete' + modelName] = function() {
		console.log(`${methodName} entrando`);
	};

	AbstractController.prototype['update' + modelName] = function() {
		console.log(`${methodName} entrando`);
	};
}

function capitalizeFirstLetter(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}


//Object.assign(AbstractController.prototype, createMethods);

module.exports = { AbstractController, createMethods };
