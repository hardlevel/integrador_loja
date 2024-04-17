class AbstractController {
	constructor(name){
		this.name = name;
	}
}

class ControllerFactory {
  static createController(controllerName, config) {
    class DynamicController extends AbstractController {
      constructor() {
        super(controllerName);
				this.name = controllerName
				this.config = config;
				this.model = new (require(this.config.modelsPath + 'abstractModel').ModelFactory.createModel(this.name))();
      }

			async fetch(id = null) {
				const { fetchAll } = require(this.config.apiPath + this.name);
				let data = '';
				if (id) {
					data = await fetchAll(id);
				} else {
					data = await fetchAll();
				}
				return data;
			};

			async save(data) {
				try {
					await this.model.create(data);
				} catch (error) {
					console.log(error);
				}
			};

			async findById(id) {
				try {
					const data = await this.model.findById(id);
					return data;
				} catch (error) {
					console.log(error);
				}
			}

			async findAll() {
				try {
					const data = await this.model.findAll();
					return data;
				} catch (error) {

				}
			}

			async update(id) {
				try {
					await this.model.update(id);
				} catch (error) {
					console.log(error);
				}
			}

			async delete(id) {
				try {
					await this.model.delete(id);
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


// function createMethods(name, options = {}) {
// 	const modelName = capitalizeFirstLetter(name);

// 	AbstractController.prototype['fetch'] = function(id = null) {
// 		const { fetchAll } = require('../api/' + name);
// 		let data = '';
// 		if (id) {
// 			data = fetchAll(id);
// 		} else {
// 			data = fetchAll();
// 		}
// 		return data;
// 	};

// 	AbstractController.prototype['save'] = function(data) {
// 		const { ModelFactory } = require('../models/abstractModel');
// 		const Model = ModelFactory.createModel(name);
// 		const instance = new Model();
// 		//const instance = new (require('../models/abstractModel').ModelFactory.createModel(name))();
// 		//const { getMethods } = require('../traits/test');
// 		//console.log(getMethods(instance));
// 		try {
// 			instance.create(data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};


// 	AbstractController.prototype['getById' + modelName] = function() {
// 		console.log(`entrando`);
// 	};

// 	AbstractController.prototype['getAll' + modelName] = function() {
// 		console.log(`entrando`);
// 	};

// 	AbstractController.prototype['delete' + modelName] = function() {
// 		console.log(`entrando`);
// 	};

// 	AbstractController.prototype['update' + modelName] = function() {
// 		console.log(`entrando`);
// 	};
// }

// function capitalizeFirstLetter(str) {
//   return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// }