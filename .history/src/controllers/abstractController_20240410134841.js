class AbstractController {
	name = '';
  constructor(name) {
		const firstLetter = name.charAt(0).toUpperCase();
		const remainingLetters = name.slice(1);
		const capitalizedWord = firstLetter + remainingLetters;
    this.name = capitalizedWord;
		this.createFunctions(this.name);
  }

	createFunctions(name){
		new Function('pinto');
	}

	teste(){
		//console.log(this.name);
		return Object.getOwnPropertyNames(AbstractController.prototype)
	}
}

module.exports = AbstractController;