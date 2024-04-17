const { config } = require('./config/config');


async function main() {
	await getData(config);
}

main();
