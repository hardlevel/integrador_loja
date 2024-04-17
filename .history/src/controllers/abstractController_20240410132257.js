class AbstractController {
  constructor(name) {
		const firstLetter = name.charAt(0).toUpperCase();
		const remainingLetters = name.slice(1);
		const capitalizedWord = firstLetter + remainingLetters;
    this.name = capitalizedWord;

		this.createMethods(this.name);
  }

	createMethods(name){
		this['create' + name] = () =>{
			return 1+1;
		}
	}

	teste(){
		console.log(this.name);
		return Object.getOwnPropertyNames(AbstractController.prototype)
	}
}

module.exports = AbstractController;