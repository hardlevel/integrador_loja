const { PrismaClient } = require('@prisma/client')
const AbstractModel = require('./abstract');
const prisma = new PrismaClient();


module.exports = {

}
const saveProduct = async (data) => {
	if (data.name != null) {
		const product = await prisma.product.create({
			data: {
				id: data.id,
				slug: data.apelido,
				sku: data.sku,
				category: data.category,
				status: true,
				name: data.nome,
				url: data.url,
				date: new Date()
			}
		});
	}
}