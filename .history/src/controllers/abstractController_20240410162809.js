class AbstractController {
	constructor(name){
		this.name = name;
		console.log('init');
	}

	teste(){
		console.log(this)
	}
}

module.exports = AbstractController;
