const AbstractModel = require('./abstractModel');
const productModel = new AbstractModel("product");

const createProduct = async (data) => {
	const product = await productModel.create(data);
	return product;
}
module.exports = { createProduct};

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