const AbstractModel = require('./abstractModel');
const productModel = new AbstractModel("product");

const create = async (data) => {
	const product = await productModel.create(data);
	return product;
}

const getAll = async (data) => {
	const products = await productModel.findAll();
	return products;
}

module.exports = { create, getAll };

// const saveProduct = async (data) => {
// 	if (data.name != null) {
// 		const product = await prisma.product.create({
// 			data: {
// 				id: data.id,
// 				slug: data.apelido,
// 				sku: data.sku,
// 				category: data.category,
// 				status: true,
// 				name: data.nome,
// 				url: data.url,
// 				date: new Date()
// 			}
// 		});
// 	}
// }