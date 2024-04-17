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
	const methods = ['save','fetch', 'getById', 'getAll', 'delete', 'update'];
	console.log(modelName)
}

function capitalizeFirstLetter(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}


//Object.assign(AbstractController.prototype, createMethods);

module.exports = { AbstractController, createMethods };
