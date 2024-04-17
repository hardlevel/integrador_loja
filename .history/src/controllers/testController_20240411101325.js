const { AbstractController, createDynamicMixin } = require('./AbstractController');

class TestController extends AbstractController{
	constructor(name, additionalName){
		super(name);
		this.additionalName = additionalName;

		// Chama createDynamicMixin passando o nome adicional
		createDynamicMixin(this.additionalName);
	}
}

module.exports = SubController;