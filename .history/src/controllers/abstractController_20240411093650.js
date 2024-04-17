class AbstractController {
	constructor(name){
		this.name = name;
	}

	pinto(){
		console.log('teste', this);
	}
}

function newMethod(name){
	['rola' + name](){cansole.log('teste')}
}
// const newMethod = {
// 	['rola' + name](){
// 		console.log('rola entrando');
// 	},
// }

Object.assign(AbstractController.prototype, newMethod(this.name));

module.exports = AbstractController;
