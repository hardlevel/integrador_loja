const baseUrl = 'https://api.awsli.com.br/';

async function getProduct(next){
	try {
		const response = await fetch(baseUrl + next, {
			method: "get",
			headers: {
				"Content-Type":"application/json",
				"Authorization":"chave_api a51b326611c437437e00 aplicacao 79412469-36ed-4d67-8649-f7a153ebd8a4"
			},
		})
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

async function getAllProducts(){
	let products = [];
	let nextPage = 'v1/produto?limit=50';

	while(nextPage) {
		const { objects, meta } = await getProduct(nextPage);
		products.push(...objects);
		nextPage = meta.next;
	}
	console.log(products);
	return products;
}

module.exports = { getProduct, getAllProducts };