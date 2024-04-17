const AbstractModel = require('./abstractModel');
//const categoryModel = new AbstractModel("category");

class PriceModel extends AbstractModel {
	constructor(){
		super('price');
	}
}

module.exports = CategoryModel;