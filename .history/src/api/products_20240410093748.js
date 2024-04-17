const baseUrl = 'https://api.awsli.com.br/';

async function getAllProducts(uri = ''){
	const page = uri ? uri : 'v1/produto?limit=50';
	const url = baseUrl + page;
	const response = await fetch(url, {
		method: "get",
		headers: {
			"Content-Type":"application/json",
			"Authorization":"chave_api a51b326611c437437e00 aplicacao 79412469-36ed-4d67-8649-f7a153ebd8a4"
		},
	})
	return await response.json();
}

async function fetchData() {
	const data = await getData();
	console.log(data.meta.total_count);
	if (data.meta.total_count > 0){
		data.objects.forEach(product => {
			console.log(product.nome);
			saveProduct(product);
		});
	}
	if (data.meta.next){
		getData(data.meta.next);
	}
}