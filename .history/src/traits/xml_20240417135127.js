const { XMLBuilder } = require('fast-xml-parser');

async function main(config){
	const types = config.types.data;
	const product = types.find(type => type.controller == 'product');
	const products = new (require(config.controllersPath + 'abstractController').ControllerFactory.createController(product, config))();

	// console.log(types);
	const xmlList = [];

	async function getData(){
		const productList = await products.findAll();
		for(const item of productList){
			if (item.images) {
			let imgStr = item.images.replace('[', '').replace(']','').replace('"','');
			let imgList = imgStr.split(",");
			console.log(imgList);
			xmlList.push({
				item_group_id: item.sku,
				gtin: item.id,
				id: item.id,
				title: item.name.replaceAll('-', ' '),
				description: item.description,
				link: item.url,
				image: 'https://cdn.awsli.com.br/2500x2500/' + item.cover,
			});
		}
		}
		//console.log(xmlList);
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
