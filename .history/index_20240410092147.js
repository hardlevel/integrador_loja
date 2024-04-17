const { products } = require('./src/controllers/productController');

async function main() {
    try {
        await syncProducts();
    } catch (error) {
        console.error('Erro no processo principal:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
