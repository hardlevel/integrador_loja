const { fetchAll } = require('../api/images');
const ImageModel = require('../models/imageModel');
const image = new ImageModel();

const getAllImages = async (id) => {
	const images = await fetchAll(id);
	//await saveImages(images);
}

async function saveImages(images){
	console.log('salvando', images);
	images.forEach(item => {
		try {
			const data = {
				id: item.id,
				path: item.caminho,
				cover: item.principal,
				product: item.produto,
				uri: item.resource_uri,
			}
			image.create(data);
		} catch (error) {
			console.log(error);
		}
	})
}

async function findImage(id){
	try	{
		console.log('producurando imagens pela id', id);
		const response = await image.findById(parseInt(id));
		return response;
	} catch (error) {
		console.log(error);
	}
}

async function getCategoryName(id)
{
	try	{
		const response = await image.findById(parseInt(id));
		return response.name;
	} catch (error) {
		console.log(error);
	}
}

async function teste(){

}

const images = { getAllImages, findImage };
module.exports = {
	images
}