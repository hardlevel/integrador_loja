const { getAllProducts } = require('../api/products');
const { createProduct } = require('../models/productModel');

//const products = getAllProducts();

async function createProduct(products){
	products.forEach(product => {
		try {
			const data = {
				id: product.id,
				slug: product.apelido,
				name: product.name,
				sku: product.sku,
				category: product.category,
				status: product.bloqueado ? false : true,
				url: product.url
			}
			createProduct(data);
		} catch (error) {
			console.log(error);
		}
	})
}

async function getAll(config){
	try {
		const products =   [{
			id: 236734190,
			apelido: 'painel-parede-croche-macrame-artesanal-cinza',
			ativo: false,
			bloqueado: false,
			categorias: [ '/api/v1/categoria/20460853' ],
			descricao_completa: '<p>Encante-se com a beleza única deste Painel de Parede de crochê, cuidadosamente confeccionada à mão. Cada ponto foi trabalhado com amor e dedicação, resultando em uma peça verdadeiramente especial. Os intricados detalhes misturando a técnica do crochê com a técnica do Macramê e a paleta de cores harmoniosas se unem para criar uma obra de arte que transmite calma e serenidade.  Feita com fios de alta qualidade, este Painel de Parede destaca-se não apenas pela sua estética, mas também pela textura suave e aconchegante. Pendure-a na parede para adicionar um toque artístico ao seu espaço, ou coloque-a sobre uma mesa como um elegante centro de mesa. Seja como for exibida, este Painel de crochê é uma expressão única de criatividade e habilidade artesanal.  Cada peça é única, refletindo o cuidado artesanal e a atenção aos detalhes. Ao adquirir este Painel, você não está apenas recebendo uma decoração, mas sim uma peça de arte feita com amor, destinada a tornar seu ambiente mais acolhedor e encantador.</p>\r\n',
			grades: [],
			gtin: '',
			id_externo: null,
			mpn: '',
			ncm: '',
			nome: 'Painel-Parede-Croche-Macramê-Artesanal-Cinza',
			removido: false,
			resource_uri: '/api/v1/produto/236734190',
			seo: '/api/v1/seo/97474585',
			sku: '2QW3UHHLW',
			tipo: 'normal',
			url: 'https://www.loja.luartes.com/painel-parede-croche-macrame-artesanal-cinza',
			url_video_youtube: '',
		},
		{
			id: 236730693,
			apelido: 'produto-rascunho-2023-10-09-17-46-17',
			ativo: false,
			bloqueado: false,
			categorias: [],
			descricao_completa: null,
			grades: [],
			gtin: null,
			id_externo: null,
			mpn: null,
			ncm: null,
			nome: null,
			removido: true,
			resource_uri: '/api/v1/produto/236730693',
			seo: '/api/v1/seo/97473747',
			sku: 'produto-rascunho-2023-10-09-17-46-17',
			tipo: 'normal',
			url: 'https://www.loja.luartes.com/none-236730693',
			url_video_youtube: null,
			variacoes: []
		},
		{
			id: 236688147,
			apelido: 'bolsa-croche-fio-nautico-couro-dourada',
			ativo: true,
			bloqueado: false,
			categorias: [ '/api/v1/categoria/20459976' ],
			descricao_completa: '<p>Bolsa em Crochê, cuidadosamente confeccionada para adicionar um toque de elegância descontraída ao seu estilo. Cada ponto é um testemunho da habilidade artesanal, criando uma trama única que combina conforto e sofisticação.  O acabamento em couro proporciona não apenas durabilidade, mas também um toque de luxo discreto. Os detalhes em couro, habilmente aplicados, elevam a bolsa, conferindo-lhe uma aparência refinada e versátil.  Esta bolsa é mais do que um acessório; é uma declaração de estilo que combina a beleza do crochê com a robustez do couro. Com espaço suficiente para seus pertences essenciais, é a companheira perfeita para encontros casuais ou ocasiões mais formais.  Deixe-se envolver pela combinação de tradição artesanal e design contemporâneo com nossa Bolsa em Crochê com Acabamento em Couro, uma escolha elegante para quem valoriza a autenticidade e a qualidade. </p>\r\n',
			grades: [],
			gtin: '',
			id_externo: null,
			mpn: '',
			ncm: '',
			nome: 'Bolsa-croche-fio-nautico-couro-dourada',
			removido: false,
			resource_uri: '/api/v1/produto/236688147',
			seo: '/api/v1/seo/97460126',
			sku: 'EWXQYXDQB',
			tipo: 'normal',
			url: 'https://www.loja.luartes.com/bolsa-croche-fio-nautico-couro-dourada',
			url_video_youtube: 'https://www.youtube.com/watch?v=vEJ3KVJKQKQ',
			variacoes: []
		},
		{
			id: 236681952,
			apelido: 'quadro-madeira-marchetaria-artesanal-raposa',
			ativo: true,
			bloqueado: false,
			categorias: [ '/api/v1/categoria/20468304' ],
			descricao_completa: '<p>Este Quadro de Marchetaria com a imagem de uma Raposa é uma verdadeira obra-prima artesanal que une habilidade e elegância. Cada peça deste quadro é cuidadosamente elaborada, combinando diferentes tipos de madeira para criar uma imagem visualmente deslumbrante.  Cada detalhe reflete a maestria do artesão, desde as curvas suaves até os padrões intrincados que contam uma história única. As madeiras cuidadosamente selecionadas não apenas conferem uma rica variedade de tons e texturas, mas também proporcionam uma sensação de autenticidade e calor ao ambiente.  Este quadro destaca a beleza natural das diferentes madeiras utilizadas. Pendure-o em sua parede para adicionar um toque de sofisticação e personalidade à sua decoração, transformando seu espaço em um verdadeiro santuário de beleza artesanal.  Cada peça é única, fazendo deste quadro de marchetaria não apenas um objeto de decoração, mas uma herança de arte e dedicação à sua disposição.</p>\r\n',
			grades: [],
			gtin: '',
			id_externo: null,
			mpn: '',
			ncm: '',
			nome: 'Quadro-Madeira-Marchetaria-Artesanal-Raposa',
			removido: false,
			resource_uri: '/api/v1/produto/236681952',
			seo: '/api/v1/seo/97453765',
			sku: '277HHJNG7',
			tipo: 'normal',
			url: 'https://www.loja.luartes.com/quadro-madeira-marchetaria-artesanal-raposa',
			url_video_youtube: 'https://www.youtube.com/watch?v=yT9UxPZZS9s',
			variacoes: []
		}
		]
		//const products = await getAllProducts();
		createProduct(products);
	} catch (error) {
		console.log(error);
	}
}

module.exports = { createProduct, getAll }