const { XMLBuilder } = require('fast-xml-parser');



const books = [
  {
    author: 'Gambardella, Matthew',
    title: "XML Developer's Guide",
    genre: 'Computer',
    price: 44.95,
    publish_date: '2000-10-01',
    description: 'An in-depth look at creating applications with XML.'
  },
];

const builder = new XMLBuilder({
  arrayNodeName: "item",
	format: true
});
const xmlContent = `<?xml version="1.0"?>
<catalog>
  ${builder.build(books)}
</catalog>`

console.log(`xml: `, xmlContent);