class AbstractController {
	constructor(name){
		this.name = name;
		console.log('init');
	}

	teste(){
		return 1;
	}
}

module.exports = AbstractController;
