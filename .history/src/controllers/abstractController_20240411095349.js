class AbstractController {
	constructor(name){
		this.name = name;
	}

	pinto(){
		console.log('teste', this);
	}
}


function createDynamicMixin(name) {
	return {
		['rola' + name](){
			console.log(`rola ${this.name} entrando`);
		},
	};
}


Object.assign(AbstractController.prototype, createDynamicMixin);

module.exports = AbstractController;
