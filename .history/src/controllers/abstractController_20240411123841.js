class AbstractController {
	constructor(name){
		this.name = name;
	}
}

class ControllerFactory {
  static createController(controllerName) {
    class DynamicController extends AbstractController {
      constructor() {
        super(controllerName);
				this.name = controllerName
				this.model = new (require('../models/abstractModel').ModelFactory.createModel(this.name))();
      }

			fetch(id = null) {
				const { fetchAll } = require('../api/' + this.name);
				let data = '';
				if (id) {
					data = fetchAll(id);
				} else {
					data = fetchAll();
				}
				return data;
			};

			save(data) {
				try {
					this.model.create(data);
				} catch (error) {
					console.log(error);
				}
			};

			findById(id) {
				try {
					this.model.findById(id);
				} catch (error) {
					console.log(error);
				}
			}

			findAll() {
				try {
					this.model.findAll();
				} catch (error) {

				}
			}

			update(id) {
				try {
					this.model.update(id);
				} catch (error) {
					console.log(error);
				}
			}

			delete(id) {
				try {
					this.model.delete(id);
				} catch (error) {
					console.log(error);
				}
			}
		}
    return DynamicController;
	}
}


//Object.assign(AbstractController.prototype, createMethods);

module.exports = { AbstractController, ControllerFactory };


function createMethods(name, options = {}) {
	const modelName = capitalizeFirstLetter(name);

	AbstractController.prototype['fetch'] = function(id = null) {
		const { fetchAll } = require('../api/' + name);
		let data = '';
		if (id) {
			data = fetchAll(id);
		} else {
			data = fetchAll();
		}
		return data;
	};

	AbstractController.prototype['save'] = function(data) {
		const { ModelFactory } = require('../models/abstractModel');
		const Model = ModelFactory.createModel(name);
		const instance = new Model();
		//const instance = new (require('../models/abstractModel').ModelFactory.createModel(name))();
		//const { getMethods } = require('../traits/test');
		//console.log(getMethods(instance));
		try {
			instance.create(data);
		} catch (error) {
			console.log(error);
		}
	};


	AbstractController.prototype['getById' + modelName] = function() {
		console.log(`entrando`);
	};

	AbstractController.prototype['getAll' + modelName] = function() {
		console.log(`entrando`);
	};

	AbstractController.prototype['delete' + modelName] = function() {
		console.log(`entrando`);
	};

	AbstractController.prototype['update' + modelName] = function() {
		console.log(`entrando`);
	};
}

function capitalizeFirstLetter(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}