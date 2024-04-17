class AbstractController {
  constructor(name) {
		const firstLetter = name.charAt(0).toUpperCase();
		const remainingLetters = name.slice(1);
		const capitalizedWord = firstLetter + remainingLetters;
    this.name = name;
		this['create' + capitalizedWord] = async () => {
			console.log('teste');
		}
  }
}

module.exports = AbstractController;