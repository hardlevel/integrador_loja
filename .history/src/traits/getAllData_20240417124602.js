async function main(config){
	const types = config.types.data;

	const init = async (types) => {
		for(const type of types){
			await getData(type);
		}
	}

	const getData = async (type, id = null) => {
		const controller = new (require(config.controllersPath + 'abstractController').ControllerFactory.createController(type, config))();
		const fields = type.fields;
		const child = type.child;
		const parent = type.parent
		let data = '';
		if (id) {
			if (parent) {
				data = await controller.fetchAll(id);
			} else {
				data = await controller.fetchOne(id);
			}
		} else {
			data = await controller.fetchAll();
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

	const getProductDetails = async () => {
		const product = types.find(type => type.controller == 'product');
		const products = new (require(config.controller).ControllerFactory.createController(product, config))();
		const category = types.find(type => type.controller == 'category');
		const categories = new (require(config.controller).ControllerFactory.createController(category, config))();
		const price = types.find(type => type.controller == 'price');
		const prices = new (require(config.controller).ControllerFactory.createController(price, config))();
		const image = types.find(type => type.child.controller == 'image');
		const images = new (require(config.controller).ControllerFactory.createController(image.child, config))();
		const data = await products.findAll();
		// const controller = new (require(config.controllersPath + 'abstractController').ControllerFactory.createController(type, config))();
		// const data = await controller.findAll();
		for(const item of data){
			const itemProduct = await products.fetchOne(item.id);
			item.width = String(itemProduct.largura);
			item.weight = String(itemProduct.peso);
			item.height = String(itemProduct.altura);
			item.depth = String(itemProduct.profundidade);
			item.dateCreated = itemProduct.data_criacao;
			item.dateModified = itemProduct.data_modificacao;
			const categoryList = JSON.parse(item.category);
			const categoriesNames = [];
			for(const category of categoryList){
				let categoryId = category.replace('/api/v1/categoria/','');
				let categoryName = await categories.findById(categoryId);
				categoriesNames.push(categoryName.name);
			}
			item.categoryName = JSON.stringify(categoriesNames);
			const priceValue = await prices.findByField('product', `/api/v1/produto/${item.id}`);
			item.price = priceValue.full;
			const imageList = await images.findByField('product', `/api/v1/produto/${item.id}`);
			for(const [key, value] of Object.entries(imageList)){
				console.log(imageList['cover']);
			}
			await products.update(item.id, item);
		}
	};

	//await init(types);
	await getProductDetails();

}

module.exports = main;