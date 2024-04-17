class AbstractController {
	constructor(name){
		this.name = name;
		console.log('init');
	}
}

console.log(this.name);

module.exports = AbstractController;
