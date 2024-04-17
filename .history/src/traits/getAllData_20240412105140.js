async function main(config){
	const types = config.types.data;

	const init = async (types) => {
		for(const type of types){
			await setData(type);
		}
	}

	const setData = async (type, id = null) => {
		const controller = new (require(config.controllersPath + 'abstractController').ControllerFactory.createController(type.controller, config))();
		const fields = type.fields;
		const child = type.child;
		const data = await controller.fetch(id);
		await proccessData(controller, data, fields, child);
	}

	const proccessData = async (controller, data, fields, child = null) => {
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
				await setData(child, item.id);
			}
		};
	}

	await init(types);

}

module.exports = main;