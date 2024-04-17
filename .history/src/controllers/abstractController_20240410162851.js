class AbstractController {
	constructor(name){
		this.name = name;
		console.log(this);
	}

	teste(){
		console.log(this);
	}
}

module.exports = AbstractController;
