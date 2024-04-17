class AbstractController {
	constructor(name){
		this.name = name;
	}
}

function createMethods(name, options = {}) {
	const modelName = capitalizeFirstLetter(name);

	AbstractController.prototype['fetch' + modelName] = function(id = null) {
		const { fetchAll } = require('../api/' + name);
		let data = '';
		if (id) {
			data = fetchAll(id);
		} else {
			data = fetchAll();
		}
		return data;
	};

	AbstractController.prototype['save' + modelName] = function(mode, data) {
		try {
			model.create(data);
		} catch (error) {
			console.log(error);
		}
	};


	AbstractController.prototype['getById' + modelName] = function() {
		console.log(`entrando`);
	};

	AbstractController.prototype['getAll' + modelName] = function() {
		console.log(`entrando`);
	};

	AbstractController.prototype['delete' + modelName] = function() {
		console.log(`entrando`);
	};

	AbstractController.prototype['update' + modelName] = function() {
		console.log(`entrando`);
	};
}

function capitalizeFirstLetter(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}


//Object.assign(AbstractController.prototype, createMethods);

module.exports = { AbstractController, createMethods };
