class AbstractController {
	constructor(name){
		this.name = name;
	}

	pinto(){
		console.log('teste', this);
	}
}

const test = mixin({
	['rola'](){console.log('teste')}
})
// const newMethod = {
// 	['rola' + name](){
// 		console.log('rola entrando');
// 	},
// }

Object.assign(AbstractController.prototype, newMethod(this.name));

module.exports = AbstractController;
