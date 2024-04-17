class AbstractController {
	constructor(name){
		this.name = name;
		console.log(this);
	}

	teste(){
		console.log('teste', this);
	}
}

module.exports = AbstractController;
