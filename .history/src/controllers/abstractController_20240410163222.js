class AbstractController {
	constructor(name){
		this.name = name;
		console.log(this);
	}

	pinto(){
		console.log('teste', this);
	}
}

module.exports = AbstractController;
