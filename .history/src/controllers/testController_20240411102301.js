const { AbstractController, createMethods } = require('./abstractController');

class TestController extends AbstractController{
	constructor(name){
		super(name);
		this.name = name;

		// Chama createDynamicMixin passando o nome adicional
		createMethods(this.name);
	}
}

module.exports = TestController;