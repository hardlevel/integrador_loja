class AbstractController {
	constructor(name){
		this.name = name;
	}
}

function createMethods(name, options = {}) {
	const modelName = capitalizeFirstLetter(name);

	AbstractController.prototype['fetch' + modelName] = function(id = null) {
		const { fetchAll } = require('../api/' + name);
		let data = '';
		if (id) {
			data = fetchAll(id);
		} else {
			data = fetchAll();
		}
		return data;
	};

	AbstractController.prototype['save' + modelName] = function(data) {
		const model = require(`../models/${name}Model`)
		data.forEach(item => {
			model.create(item)
		})
		// 	products.forEach(item => {
// 		try {
// 			const data = {
// 				id: item.id,
// 				slug: item.apelido,
// 				name: item.name ? item.name : item.apelido,
// 				sku: item.sku,
// 				category: item.category,
// 				status: item.bloqueado ? false : true,
// 				url: item.url,
// 				date: new Date()
// 			}
// 			product.create(data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	})
// }
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


//Object.assign(AbstractController.prototype, createMethods);

module.exports = { AbstractController, createMethods };
