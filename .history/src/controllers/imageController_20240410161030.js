const { fetchAll } = require('../api/images');
const ImageModel = require('../models/imageModel');
const image = new ImageModel();

const getAllImages = async (id) => {
	const images = await fetchAll(id);
	await saveImages(images);
}

id Int @id @unique
path String
product String
uri String

async function saveImages(images){
	images.forEach(item => {
		try {
			const data = {
				id: item.id,
				path: item.caminho,
				cover: item.principal,
				product: item.produto,
				resource_uri: item.resource_uri,
			}
			image.create(data);
		} catch (error) {
			console.log(error);
		}
	})
}

async function findImage(id){
	try	{
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