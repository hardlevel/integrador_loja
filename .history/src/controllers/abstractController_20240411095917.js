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

	AbstractController.prototype[methodName] = function() {
		console.log(`${methodName} entrando`);
	};
}


//Object.assign(AbstractController.prototype, createMethods);

module.exports = { AbstractController, createMethods };
