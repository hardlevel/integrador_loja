const { config } = require('./config/config');
const getData = require('./src/traits/getAllData');
const xml = require(config.traitsPath + 'xml');
const facebook = require(config.controllersPath + "facebookController");

async function main() {
	// await getData(config);
	//await xml(config);

	// console.log(await debugToken());
	// await getData(config);
	const fb = new facebook(config);
	await fb.getPageLongToken();
}

main();
