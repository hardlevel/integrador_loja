const AbstractModel = require('./abstractModel');

class productModel extends AbstractModel {
    constructor(prisma) {
        super(prisma);
    }

		async createProduct(data, product){
			return await this.create(data);
		}

    // async findByUsername(username) {
    //     return await this.prisma.user.findUnique({ where: { username } });
    // }
}

module.exports = productModel;

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