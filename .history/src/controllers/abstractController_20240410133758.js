class AbstractController {
  constructor(name) {
		name;
		const firstLetter = name.charAt(0).toUpperCase();
		const remainingLetters = name.slice(1);
		const capitalizedWord = firstLetter + remainingLetters;
    this.name = capitalizedWord;
  }

	this.['create'](){

	}

	teste(){
		console.log(this.name);
		return Object.getOwnPropertyNames(AbstractController.prototype)
	}
}

module.exports = AbstractController;