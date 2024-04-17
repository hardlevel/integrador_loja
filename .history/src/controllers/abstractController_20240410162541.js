class AbstractController {
	constructor(name){
		this.name = name;
		console.log('init');
	}

	teste(){
		return 1;
	}
}

console.log(this.name);

module.exports = AbstractController;
