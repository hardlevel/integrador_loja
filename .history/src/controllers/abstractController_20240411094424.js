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
			console.log(`rola ${name} entrando`);
		},
	};
}

const newMethod = createDynamicMixin('AbstractController');
Object.assign(AbstractController.prototype, newMethod);

module.exports = AbstractController;
