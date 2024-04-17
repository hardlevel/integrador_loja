class AbstractController {
	constructor(name){
		this.name = name;
	}
}

class ControllerFactory {
  static createController(type, config) {
    class DynamicController extends AbstractController {
      constructor() {
        super(type);
				this.name = type.controller
				this.config = config;
				this.type = type;
				this.model = new (require(this.config.model).ModelFactory.createModel(this.name))();
      }

			async fetchAll(id = null) {
				const { fetchAll } = require(this.config.api);
				let data = '';
				if (id) {
					data = await fetchAll(this.config, this.type, id);
				} else {
					data = await fetchAll(this.config, this.type);
				}
				return data;
			};

			async fetch(id = null) {
				const { fetch } = require(this.config.api);
				let data = '';
				if (id) {
					data = await fetch(this.config, this.type, id);
				} else {
					data = await fetch(this.config, this.type);
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

module.exports = { AbstractController, ControllerFactory };