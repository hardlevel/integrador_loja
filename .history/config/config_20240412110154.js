const path = require('path');

const basePath = path.join(__dirname, '../src');
const modelsPath = path.join(basePath, 'models/');
const controllersPath = path.join(basePath, 'controllers/');
const traitsPath = path.join(basePath, 'traits/');
const apiPath = path.join(basePath, 'api/');
const apiUrl = 'https://api.awsli.com.br';
const chave_api = 'a51b326611c437437e00';
const aplicacao = '79412469-36ed-4d67-8649-f7a153ebd8a4';

const types = {
	data: [{
		controller: 'product',
		fields: {
			id: 'id',
			apelido: 'slug',
			nome: 'name',
			sku: 'sku',
			categorias: 'category',
			bloqueado: 'status',
			url: 'url',
			date: 'date'
		},
		child:
			{
				controller: 'image',
				fields: {
					id:'id',
					caminho:'path',
					produto:'product',
					principal:'cover',
					resource_uri:'uri',
				}
			},

	},
	{
		controller: 'category',
		fields: {
			id: 'id',
			descricao: 'desc',
			nome: 'name',
			resource_uri: 'uri',
			id_externo: 'external_id',
			categoria_pai: 'related_category'
		}
	},
	{
		controller: 'price',
		fields: {
		id: 'id',
		cheio: 'full',
		custo: 'coust',
		produto: 'product',
		resource_uri: 'uri',
		sob_consulta: 'consult',
		}
	}
]}

const config = {
	basePath,
	modelsPath,
	controllersPath,
	traitsPath,
	apiPath,
	apiUrl,
	types,
	chave_api,
	aplicacao
}
module.exports = { config };
