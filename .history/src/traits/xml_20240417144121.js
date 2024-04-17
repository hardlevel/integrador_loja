const { XMLBuilder } = require('fast-xml-parser');
const fs = require('fs');
async function main(config){
	const types = config.types.data;
	const product = types.find(type => type.controller == 'product');
	const products = new (require(config.controllersPath + 'abstractController').ControllerFactory.createController(product, config))();
	const builder = new XMLBuilder({
		arrayNodeName: "item",
		format: true
	});
	// console.log(types);
	const xmlList = [];
	const imgUrl = 'https://cdn.awsli.com.br/2500x2500/';

	async function getData(){
		const productList = await products.findAll();
		for(const item of productList){
			if (item.images) {
			let BRL = new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
			});
			xmlList.push({
					'g:item_group_id': item.sku,
					'g:gtin': item.id,
					'g:id': item.id,
					'g:title': item.name.replaceAll('-', ' '),
					'g:description': item.description,
					'g:link': item.url,
					'g:image_link': imgUrl + item.cover,
					'g:additional_image_link': item.images.replace('[', '').replace(']',''),
					'g:brand': 'LuArtes',
					'g:condition': 'New',
					'g:availability': 'in stock',
					'g:price': BRL.format(item.price)
			});
		}
		}
		return xmlList;
	}

	async function createXml(){
		const data = await getData();
		const xmlContent = `<?xml version="1.0"?>
	<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
	<title>Produtos Luartes</title>
	<description>Product Feed for Facebook</description>
	<link>https://www.loja.luartes.com/</link>
	<atom:link href="https://www.hardlevel.com.br/luartes.xml" rel="self"
		type="application/rss+xml" />
		${builder.build(data)}
	</channel></rss>`

	return xmlContent;
	}


	async function uploadXml(){
		const data = await createXml();
		// fs.writeFile('products.xml', data, function (err) {
		// 	if (err) throw err;
		// 	console.log('Saved!');
		// });
		const formData = new FormData();
    formData.append('products.xml', data);
		fetch('https://graph.facebook.com/2277383729095303/uploads', {
			method: "POST",
			headers:{
				"Content-Type": "application/json",
			},
			body:{
				"access_token":"EAAjTYBFZAgggBOZCxLozG2mUnZAkNiWq8CuZCnnbu2du64voApynyA1sRNonoQQF3s4IChqv0EmumsN3quFkDRRxojHYgAnMyBCoZCGkokJZAwYNAGZCBpa3umPpUOlN6UXDs6Q4iJvWH4uH5LgbVYn93QHbFWAKpY75lgWtt4m3mykfDrE2JhViNZBmrT20a6gZD",
				formData
			}
		}).then(response => console.log(response.json())).catch(error => console.log(error));
	}
	await uploadXml();
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
