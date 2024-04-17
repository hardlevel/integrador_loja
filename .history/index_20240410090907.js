const { XMLBuilder } = require('fast-xml-parser');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const baseUrl = 'https://api.awsli.com.br/';

async function getData(uri = ''){
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

const saveProduct = async (data) => {
	if (data.name) {
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

fetchData();
// id Int @id @unique
// slug String @unique
// name String @unique
// sku String @unique
// category String
// status Boolean @default(true)
// date DateTime
// url String
// const books = [
//   {
//     author: 'Gambardella, Matthew',
//     title: "XML Developer's Guide",
//     genre: 'Computer',
//     price: 44.95,
//     publish_date: '2000-10-01',
//     description: 'An in-depth look at creating applications with XML.'
//   },
// ];

// const builder = new XMLBuilder({
//   arrayNodeName: "item",
// 	format: true
// });
// const xmlContent = `<?xml version="1.0"?>
// <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0" xmlns:atom="http://www.w3.org/2005/Atom">
// <channel>
// <title>Produtos Luartes</title>
// <description>Product Feed for Facebook</description>
// <link>https://www.loja.luartes.com/</link>
// <atom:link href="https://www.hardlevel.com.br/luartes.xml" rel="self"
// 	type="application/rss+xml" />
//   ${builder.build(books)}
// </channel></rss>`

// console.log(`xml: `, xmlContent);