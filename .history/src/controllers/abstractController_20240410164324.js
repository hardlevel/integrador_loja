class AbstractController {
	constructor(name){
		this.name = name;
		//console.log(this);
	}

	pinto(){
		console.log('teste', this);
	}
}

let dura = 'Dura';
let mole = 'Mole';
const newMethod = {
	['rola' + dura](){
		console.log('rola entrando');
	}
	['rola' + mole](){
		console.log('rola não entrando');
	}
}

Object.assign(AbstractController.prototype, newMethod);

module.exports = AbstractController;
