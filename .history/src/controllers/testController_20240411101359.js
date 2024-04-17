const { AbstractController, createDynamicMixin } = require('./abstractController');

class TestController extends AbstractController{
	constructor(name, additionalName){
		super(name);
		this.additionalName = additionalName;

		// Chama createDynamicMixin passando o nome adicional
		createDynamicMixin(this.additionalName);
	}
}

module.exports = TestController;