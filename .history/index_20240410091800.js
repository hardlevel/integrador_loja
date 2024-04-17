const products = require('./api/products');
const { product } = require('./models/product');

async function main(){
	try {

	} catch (error) {
		console.error('Erro no processo principal', error)
	} finally {
		await.prisma.$disconnect();
	}
}

main();