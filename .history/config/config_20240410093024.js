const path = require('path');

const basePath = path.join(__dirname, '../src');
const modelsPath = path.join(basePath, 'models');
const controllersPath = path.join(basePath, 'controllers');
const traitsPath = path.join(basePath, 'traits');
const apiPath = path.join(basePath, 'api');

module.exports = {
    basePath,
    modelsPath,
    controllersPath,
		traitsPath,
		apiPath
};
