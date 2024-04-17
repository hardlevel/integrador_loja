const { config } = require('./config/config');
const getData = require('./src/traits/getAllData');
const xml = require(config.traitsPath + '/xml');

async function main() {
	await getData(config);
	//await xml(config);
}

main();
