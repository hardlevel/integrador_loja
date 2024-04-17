class AbstractController {
	constructor(name){
		this.name = name;
	}

	pinto(){
		console.log('teste', this);
	}
}

const newMethod = {
	['rola' + this.name](){
		console.log('rola entrando');
	},
	['rola' + this.name](){
		console.log('rola não entrando');
	}
}

Object.assign(AbstractController.prototype, newMethod);

module.exports = AbstractController;
