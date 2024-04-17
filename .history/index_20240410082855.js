const { XMLBuilder } = require('fast-xml-parser');

const baseUrl = 'https://api.awsli.com.br/';

async function getData(uri = ''){
	const page = uri ? uri : 'produto';
	const url = baseUrl + page;
	console.log(url);
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
	console.log(data);
}

fetchData();

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