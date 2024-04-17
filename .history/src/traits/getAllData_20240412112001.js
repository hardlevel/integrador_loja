async function main(config){
	const types = config.types.data;

	const init = async (types) => {
		for(const type of types){
			await getData(type);
		}
	}

	const getData = async (type, id = null) => {
		const controller = new (require(config.controllersPath + 'abstractController').ControllerFactory.createController(type.controller, config))();
		const fields = type.fields;
		const child = type.child;
		if (id) {
			const data = await controller.fetch(id);
		} else {
			const data = await controller.fetchAll();
		}
		await setData(controller, data, fields, child);
	}

	const setData = async (controller, data, fields, child = null) => {
		for (const item of data) {
			const mapping = {};
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
				await getData(child, item.id);
			}
		};
	}

	await init(types);

}

module.exports = main;