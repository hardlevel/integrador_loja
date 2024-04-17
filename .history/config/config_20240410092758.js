const path = require('path');

const basePath = path.join(__dirname, 'src');
const modelsPath = path.join(basePath, 'models');
const controllersPath = path.join(basePath, 'controllers');


module.exports = {
    basePath,
    modelsPath,
    controllersPath
};
