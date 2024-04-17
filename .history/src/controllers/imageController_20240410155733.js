const { fetchAll } = require('../api/images');
const ImageyModel = require('../models/imageModel');
const image = new ImageModel();

const getAllImages = async (id) => {
	const images = await fetchAll();
	await saveImages(images);
}

async function saveImages(categories){
	images.forEach(item => {
		try {
			const data = {
				id: item.id,
				desc: item.descricao,
				name: item.nome,
				external_id: item.id_externo,
				resource_uri: item.resource_uri,
				url: item.url,
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