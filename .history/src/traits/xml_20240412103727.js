const { XMLBuilder } = require('fast-xml-parser');

async function main(config){
	const types = config.types.data;

	// console.log(types);

	async function getData(){
		for(const type of types){
			console.log(type).controller;
		}
	}

	await getData();

	const builder = new XMLBuilder({
		arrayNodeName: "item",
		format: true
	});
	// const xmlContent = `<?xml version="1.0"?>
	// <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0" xmlns:atom="http://www.w3.org/2005/Atom">
	// <channel>
	// <title>Produtos Luartes</title>
	// <description>Product Feed for Facebook</description>
	// <link>https://www.loja.luartes.com/</link>
	// <atom:link href="https://www.hardlevel.com.br/luartes.xml" rel="self"
	// 	type="application/rss+xml" />
	// 	${builder.build(books)}
	// </channel></rss>`

	// console.log(`xml: `, xmlContent);
	// module.exports = xml
}

module.exports = main;


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
