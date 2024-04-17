class AbstractController {
	constructor(name){
		this.name = name;
		//console.log(this);
	}

	pinto(){
		console.log('teste', this);
	}
}

const newMethod = {
	rola(){
		console.log('rola entrando');
	}
}

Object.assign(AbstractController.prototype, newMethod);

module.exports = AbstractController;
