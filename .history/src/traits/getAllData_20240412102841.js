const { getMethods } = require('./test');

async function main(config){



	// const products = new (require('../controllers/abstractController').ControllerFactory.createController('product'))();
	// const images = new (require('../controllers/abstractController').ControllerFactory.createController('image'))();
	// const categories = new (require('../controllers/abstractController').ControllerFactory.createController('category'))();
	// const prices = new (require('../controllers/abstractController').ControllerFactory.createController('price'))();

	const init = async (types) => {
		// console.log(types.data);
		for(const type of types.data){
			await setData(type);
		}
		// for(const typeName in types){
		// 	console.log(typeName);
		// }
	}

	const setData = async (type, id = null) => {
		const controller = new (require('../controllers/abstractController').ControllerFactory.createController(type.controller))();
		const fields = type.fields;
		const child = type.child;
		const data = await controller.fetch(id);

		await proccessData(controller, data, fields, child);
	}

	const proccessData = async (controller, data, fields, child = null) => {
		for (const item of data) {
			const mapping = {};
			// console.log(item.id);
			for(const field in fields){
				if (item.hasOwnProperty(field)){
					let inputData = '';
					if (typeof item[field] == 'object'){
						inputData = JSON.stringify(item[field]);
					} else if (item[field] == null){
						inputData = '';
					} else {
						inputData = item[field];
					}
					mapping[fields[field]] = inputData;
				}
			}
			await controller.save(mapping);
			if (child) {
				await setData(child, item.id);
			}
		};
	}

	await init(types);

}

module.exports = main;