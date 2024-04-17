class AbstractController {
	constructor(name){
		this.name = name;
	}

	pinto(){
		console.log('teste', this);
	}
}

const newMethod = name => {
	['rola' + name](){
		console.log('rola entrando');
	},
}

Object.assign(AbstractController.prototype, newMethod(this.name));

module.exports = AbstractController;
