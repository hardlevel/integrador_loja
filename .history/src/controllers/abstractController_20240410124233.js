class AbstractController {
  constructor(name) {
		const firstLetter = name.charAt(0).toUpperCase();
		const remainingLetters = name.slice(1);
		const capitalizedWord = firstLetterCap + remainingLetters;
		console.log(capitalizedWord);
    this.name = name;
  }


}

module.exports = AbstractController;