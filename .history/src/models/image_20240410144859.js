const AbstractModel = require('./abstractModel');
//const categoryModel = new AbstractModel("category");

class ImageModel extends AbstractModel {
	constructor(){
		super('image');
	}
}

module.exports = ImageModel;