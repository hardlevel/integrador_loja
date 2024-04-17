class AbstractController {
	constructor(name){
		this.name = name;
	}

	pinto(){
		console.log('teste', this);
	}
}

function createMethods(name) {
	const modelName = capitalizeFirstLetter(name);

	AbstractController.prototype['fetch' + modelName] = function() {
		const { fetchAll } = require('../src/api/' + name);
		const images = await fetchAll(id = null);
		//await saveImages(images);
		return images;
	}
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
