class AbstractController {
	constructor(name){
		this.name = name;
	}

	pinto(){
		console.log('teste', this);
	}
}

function createMethods(name) {
	const methods = ['save','fetch', 'getById', 'getAll', 'delete', 'update'];
	methods.forEach(method => {
		const methodName = method + capitalize(name);
		console.log(methodName);
	})
	AbstractController.prototype[methodName] = function() {
		console.log(`${methodName} entrando`);
	};
}

function capitalizeFirstLetter(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}


//Object.assign(AbstractController.prototype, createMethods);

module.exports = { AbstractController, createMethods };
