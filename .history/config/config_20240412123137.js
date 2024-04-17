const path = require('path');

const basePath = path.join(__dirname, '../src');
const modelsPath = path.join(basePath, 'models/');
const controllersPath = path.join(basePath, 'controllers/');
const traitsPath = path.join(basePath, 'traits/');
const apiPath = path.join(basePath, 'api/');
const apiUrl = 'https://api.awsli.com.br';
const chave_api = 'a51b326611c437437e00';
const aplicacao = '79412469-36ed-4d67-8649-f7a153ebd8a4';

const api = path.join(basePath, 'api/api.js');
const controller = path.join(basePath, 'controllers/abstractController');
const model = path.join(basePath, 'models/abstractModel');

const types = {
	data: [{
		controller: 'product',
		apiAll: '/v1/produto?limit=50',
		apiSingle: '/v1/produto/',
		fields: {
			id: 'id',
			apelido: 'slug',
			nome: 'name',
			sku: 'sku',
			categorias: 'category',
			bloqueado: 'status',
			url: 'url',
			descricao_completa: 'description',
			date: 'date'
		},
		child:
			{
				controller: 'image',
				apiAll: '/v1/produto_imagem/?produto=',
				apiSingle: '/v1/produto_imagem/',
				parent: 'product',
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
		apiAll: '/v1/categoria?limit=50',
		apiSingle: '/v1/categoria/',
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
		apiAll: '/v1/produto_preco?limit=50',
		apiSingle: '/v1/produto_preco/',
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
	aplicacao,
	model,
	api,
	controller
}
module.exports = { config };
