const { getMethods } = require('./test');
// const data = [
// 	{
//     id: 22668721,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: 'Organizador feito à mão com crochê, usando fio de alta qualidade para proporcionar durabilidade e um visual encantador. O organizador possui um fundo sólido de MDF para garantir uma boa sustentação, tornando-o perfeito para armazenar diversos itens de forma organizada e elegante.',
//     nome: 'Organizador-croche',
//     resource_uri: '/v1/categoria/22668721',
//     seo: '/v1/seo/103705095',
//     url: 'https://www.loja.luartes.com/organizador-croche-22668721'
//   },
//   {
//     id: 20460853,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: null,
//     nome: 'Painel crochê',
//     resource_uri: '/v1/categoria/20460853',
//     seo: '/v1/seo/97473288',
//     url: 'https://www.loja.luartes.com/painel-croche-20460853'
//   },
//   {
//     id: 21161049,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: 'Porta Canetas em Marchetaria, uma fusão de elegância artesanal e funcionalidade refinada. Cada detalhe deste suporte é uma obra-prima de habilidade e precisão, revelando a beleza atemporal da marchetaria.  A meticulosa combinação de diferentes madeiras nobres forma padrões intrincados que envolvem o porta canetas, adicionando uma dimensão de sofisticação à sua mesa. Cada peça é única, refletindo o trabalho artístico do artesão e a riqueza natural das madeiras selecionadas.  Este porta canetas não apenas organiza seus instrumentos de escrita, mas também acrescenta um toque distintivo à sua área de trabalho. Deixe-se envolver pela essência da marchetaria, onde a tradição encontra a modernidade, e eleve sua experiência cotidiana com este exemplar de arte funcional.  Desfrute da combinação de forma e função enquanto adiciona um toque de classe e originalidade ao seu espaço de trabalho com o nosso Porta Canetas em Marchetaria, uma peça que transcende o ordinário e se destaca como uma expressão autêntica de habilidade artesanal.',
//     nome: 'Porta-Canetas-Madeira-Marchetaria-Artezanal',
//     resource_uri: '/v1/categoria/21161049',
//     seo: '/v1/seo/99294670',
//     url: 'https://www.loja.luartes.com/porta-canetas-madeira-marchetaria-artezanal-21161049'
//   },
//   {
//     id: 21159270,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: 'Porta celular artesanal em madeira é uma peça única e encantadora, meticulosamente trabalhada com a técnica de marchetaria. A base do porta celular é confeccionada em madeira escolhida cuidadosamente para proporcionar durabilidade e beleza. As dimensões são pensadas para acomodar diferentes tamanhos de smartphones de forma segura.  O destaque principal desse objeto é o revestimento de folhas de madeira aplicadas com maestria através da marchetaria. A marchetaria é uma arte que consiste em criar padrões decorativos utilizando diferentes tipos e cores de madeira, cortadas e ajustadas de forma milimétrica para formar desenhos complexos e elegantes. Nesse caso, as folhas de madeira são cuidadosamente selecionadas para criar um padrão visualmente atraente e harmonioso.  Os detalhes do padrão de marchetaria podem variar, desde desenhos geométricos abstratos até representações da natureza, dependendo da inspiração e da criatividade do artesão. A aplicação das folhas de madeira cria uma textura única e uma sensação tátil agradável, destacando a habilidade artesanal envolvida na criação da peça.  Além do aspecto estético, o porta celular artesanal também é funcional. Ele possui uma inclinação adequada para facilitar a visualização da tela do smartphone, proporcionando conforto durante o uso. As bordas são suavemente arredondadas, evidenciando o cuidado com os detalhes e garantindo um toque refinado.  A madeira utilizada é tratada, não apenas para realçar sua beleza natural, mas também para proteger a peça contra desgastes do tempo. O resultado final é um porta celular que não só cumpre sua função prática, mas também se destaca como uma obra de arte única, demonstrando a habilidade artesanal e a atenção aos detalhes do artesão.',
//     nome: 'Porta-Celular-Madeira-marchetaria-Artezanal',
//     resource_uri: '/v1/categoria/21159270',
//     seo: '/v1/seo/99291094',
//     url: 'https://www.loja.luartes.com/porta-celular-madeira-marchetaria-gato-artezanal-21159270'
//   },
//   {
//     id: 21046176,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: 'Porta Chaves em Marchetaria com a Majestosa Imagem de Tucano, uma peça que combina a beleza da natureza com a elegância artesanal da marchetaria. Cada detalhe desta criação é uma obra-prima de habilidade e precisão, revelando a riqueza da fauna brasileira.  A imagem do tucano, meticulosamente entalhada em madeira, adiciona um toque exótico e colorido ao seu espaço. A marchetaria, técnica que utiliza diferentes tipos de madeira para criar padrões, traz uma dimensão única ao porta chaves, tornando-o uma verdadeira obra de arte.  Este não é apenas um local conveniente para organizar suas chaves, mas sim uma declaração de estilo e paixão pela natureza. Pendure-o em sua parede para adicionar um toque de charme e um lembrete diário da beleza das aves tropicais.  Feito com amor e cuidado, o Porta Chaves em Marchetaria com Imagem de Tucano é mais do que um acessório funcional; é uma expressão de apreço pela biodiversidade e um elo entre a arte e a natureza que você pode apreciar todos os dias.',
//     nome: 'Porta chaves em Marchetaria',
//     resource_uri: '/v1/categoria/21046176',
//     seo: '/v1/seo/99175513',
//     url: 'https://www.loja.luartes.com/porta-chaves-em-marchetaria-21046176'
//   },
//   {
//     id: 20459962,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: 'Lindo quadro de marchetaria feito manualmente com folhas de madeira em diferentes tonalidades, figura de gato.',
//     nome: 'Quadros',
//     resource_uri: '/v1/categoria/20459962',
//     seo: '/v1/seo/97455980',
//     url: 'https://www.loja.luartes.com/quadros-20459962'
//   },
//   {
//     id: 21046543,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: 'Sousplat Artesanal em Crochê, uma peça que combina a tradição do crochê com a elegância do sousplat, criando um toque encantador para suas refeições. Cada detalhe desta criação é uma expressão de habilidade artesanal, onde fios delicados se entrelaçam para formar padrões encantadores.  A trama cuidadosamente trabalhada não só adiciona um toque de suavidade à sua mesa, mas também é uma manifestação de criatividade e dedicação. Feito à mão, cada sousplat é único, refletindo o cuidado artesanal e a atenção aos detalhes.  O crochê proporciona não apenas uma estética visualmente cativante, mas também uma textura tátil agradável. Esta peça não é apenas funcional, mas também uma obra de arte que transforma suas refeições em momentos especiais.  Adorne sua mesa com o charme do nosso Sousplat Artesanal em Crochê, uma adição requintada que une tradição e estilo, garantindo uma atmosfera acolhedora e elegante em cada ocasião.',
//     nome: 'Sousplate-Jogo-Americano',
//     resource_uri: '/v1/categoria/21046543',
//     seo: '/v1/seo/99175757',
//     url: 'https://www.loja.luartes.com/sousplate-jogo-americano-21046543'
//   },
//   {
//     id: 21416777,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: 'Encante-se com o Aconchego e a Magia: Tapete Infantil em Crochê com Barbante\r\n' +
//       '\r\n' +
//       'Este tapete infantil é mais do que uma simples peça decorativa; é uma obra de arte feita com carinho e criatividade para transformar o espaço dos pequenos em um ambiente acolhedor e cheio de encanto.\r\n' +
//       '\r\n' +
//       'Características Encantadoras:\r\n' +
//       '\r\n' +
//       'Crochê Artesanal: Cada detalhe deste tapete é cuidadosamente trabalhado à mão com a técnica tradicional do crochê. O resultado é uma peça única, repleta de carinho e dedicação, proporcionando um toque especial ao quarto das crianças.\r\n' +
//       '\r\n' +
//       'Barbante Resistente: Feito com barbante de alta qualidade, este tapete é resistente e durável, garantindo que possa resistir ao uso constante e às brincadeiras animadas das crianças. Além disso, o barbante confere uma textura macia e agradável ao toque.\r\n' +
//       '\r\n' +
//       'Design Lúdico: Com um design lúdico e colorido, o tapete transforma o chão em um playground imaginativo. Pode apresentar formas divertidas, personagens encantadores ou padrões coloridos que estimulam a criatividade das crianças.\r\n' +
//       '\r\n' +
//       'Conforto e Segurança: A espessura do tapete proporciona uma superfície macia e confortável para os pequenos brincarem, garantindo também uma camada adicional de segurança durante as atividades diárias.\r\n' +
//       '\r\n' +
//       'Fácil Manutenção: Além de sua beleza, o tapete é prático. Pode ser facilmente lavado e mantido, tornando-o ideal para o universo dinâmico das crianças.\r\n' +
//       '\r\n' +
//       'Tamanho Adequado: Com as dimensões perfeitas para o quarto infantil, o tapete se adapta facilmente a diferentes espaços, proporcionando uma área aconchegante para as crianças brincarem e relaxarem.\r\n' +
//       '\r\n' +
//       'Presente Encantador: Este tapete também se destaca como um presente encantador para aniversários, chás de bebê ou para celebrar momentos especiais na vida das crianças.\r\n' +
//       '\r\n' +
//       'Leve a magia para o quarto das crianças com este Tapete Infantil em Crochê com Barbante. Cada ponto conta uma história, transformando o chão em um mundo de imaginação e diversão. Adquira agora e presenteie os pequenos com um toque especial de carinho e criatividade!',
//     nome: 'Tapete Infantil de Crochê',
//     resource_uri: '/v1/categoria/21416777',
//     seo: '/v1/seo/99624508',
//     url: 'https://www.loja.luartes.com/tapete-infantil-de-croche-21416777'
//   },
//   {
//     id: 21418449,
//     id_externo: null,
//     categoria_pai: null,
//     descricao: 'Brilho e Elegância: Vestido de Crochê com Fio Prata de Algodão\r\n' +
//       '\r\n' +
//       'Deixe-se envolver pelo encanto e sofisticação deste deslumbrante vestido de crochê, cuidadosamente confeccionado com fio prata de algodão. Cada ponto é uma obra de arte, criando uma peça única que combina a tradição do crochê com um toque moderno e luxuoso.\r\n' +
//       '\r\n' +
//       'Características Deslumbrantes:\r\n' +
//       '\r\n' +
//       'Fio Prata de Algodão: O uso de fio prata de algodão não apenas confere ao vestido um brilho sutil e elegante, mas também proporciona uma sensação suave e confortável. A mistura de algodão adiciona leveza ao tecido, tornando-o perfeito para ocasiões especiais.\r\n' +
//       '\r\n' +
//       'Padrões Intrincados de Crochê: Cada detalhe do vestido é resultado de habilidades artesanais excepcionais. Os padrões intrincados de crochê dão uma textura única à peça, adicionando um toque artístico que se destaca.\r\n' +
//       '\r\n' +
//       'Silhueta Elegante: O design do vestido é pensado para realçar a silhueta de maneira graciosa e elegante. Seja em um estilo mais ajustado ou fluído, o crochê permite uma modelagem versátil que se adapta ao corpo de maneira encantadora.\r\n' +
//       '\r\n' +
//       'Toque Moderno com Brilho Prateado: O fio prata adiciona um toque moderno à peça, criando um brilho sutil que destaca a beleza do crochê. É uma escolha perfeita para eventos noturnos ou celebrações especiais.\r\n' +
//       '\r\n' +
//       'Conforto e Versatilidade: Apesar de sua aparência refinada, o vestido de crochê oferece conforto inigualável. A natureza respirável do algodão torna-o adequado para diversas estações, enquanto o crochê permite movimento sem restrições.\r\n' +
//       '\r\n' +
//       'Ocasiões Especiais: Este vestido é ideal para ocasiões especiais, como festas, casamentos ou eventos formais. Sua combinação de elegância clássica e elementos modernos garante que você se destaque com estilo.\r\n' +
//       '\r\n' +
//       'Detalhes Personalizados: Possíveis detalhes, como decotes, mangas ou comprimentos diferentes, podem ser ajustados conforme suas preferências pessoais, tornando o vestido ainda mais exclusivo.\r\n' +
//       '\r\n' +
//       'Celebre a sua beleza única com este Vestido de Crochê feito com Fio Prata de Algodão. Uma peça que transcende o comum, elevando seu estilo a um nível de pura sofisticação. Adquira agora e brilhe em qualquer ocasião especial!',
//     nome: 'Vestido-Crochê-fio-prata-Algodão-Bege',
//     resource_uri: '/v1/categoria/21418449',
//     seo: '/v1/seo/99628297',
//     url: 'https://www.loja.luartes.com/vestido-croche-fio-prata-algodao-bege-21418449'
//   },
//   {
//     id: 20468304,
//     id_externo: null,
//     categoria_pai: '/v1/categoria/20459962',
//     descricao: 'Quadro de madeira utilizando técnica em marchetaria. Ideal em qualquer ambiente',
//     nome: 'Quadro_Marchetaria',
//     resource_uri: '/v1/categoria/20468304',
//     seo: '/v1/seo/97629470',
//     url: 'https://www.loja.luartes.com/quadro_marchetaria-20468304'
//   }
// ]

async function main(config){
	const types = {
		products: {
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
			}
		},
		categories: {
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
		images: {
			controller: 'image',
			related: 'product',
			fields: {
				id:'id',
				caminho:'path',
				produto:'product',
				principal:'cover',
				resource_uri:'uri',
			}
		},
		prices: {
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
	}


	// const products = new (require('../controllers/abstractController').ControllerFactory.createController('product'))();
	// const images = new (require('../controllers/abstractController').ControllerFactory.createController('image'))();
	// const categories = new (require('../controllers/abstractController').ControllerFactory.createController('category'))();
	// const prices = new (require('../controllers/abstractController').ControllerFactory.createController('price'))();

	const init = async (types) => {
		//console.log(types);
		for(const typeName in types){
			await setData(types[typeName]);
		}
	}

	const setData = async (type, id = null) => {
		const controller = new (require('../controllers/abstractController').ControllerFactory.createController(type.controller))();
		const fields = type.fields;
		if (!type.related) {
			const data = await controller.fetch();
			await proccessData(controller, data, fields, type, type.related);
		}
		if (id) {
			console.log(type, id);
			const data = await controller.fetch(id);
			await proccessData(controller, data, fields, type);
		}
	}

	const proccessData = async (controller, data, fields, type, related) => {
		for (const item of data) {
			const mapping = {};
			for(const field in fields){
				if (item.hasOwnProperty(field)){
					let inputData = '';
					if (typeof item[field] == 'object'){
						inputData = JSON.stringify(item[field]);
					} else if (item[field] == null){
						inputData = '';
					} else {
						inputData = item[field];
					}
					mapping[fields[field]] = inputData;
				}
			}
			await controller.save(mapping);
			for (const type in types){
				// console.log(type, types[type].hasOwnProperty('related'))
				if (types[type].hasOwnProperty('related')) {
					console.log(types[type].related == type);
					if (types[type].related == type) {
						console.log(type, item.id);
						await setData(type, item.id);
					}
				}
			}
		};
	}

	await init(types);
	//await checkTypes(types);
	//await fetchData(types.categories);
	//console.log(types.data);
	// const categoryList = await categories.fetch();
	// for (const category of categoryList) {
	// 	const data = {
	// 		id: category.id,
	// 		desc: category.descricao,
	// 		name: category.nome,
	// 		uri: category.resource_uri,
	// 		external_id: category.id_externo,
	// 		related_category: category.categoria_pai
	// 	};
	// 	await categories.save(data);
	// };

	// const priceList = await prices.fetch();
	// for (const price of priceList) {
	// 	const data = {
	// 		id: price.id,
	// 		full: price.cheio,
	// 		coust: price.custo,
	// 		product: price.produto,
	// 		uri: price.resource_uri,
	// 		consult: price.sob_consulta,
	// 	}
	// 	await prices.save(data);
	// }

	// const productList = await products.fetch();
	// for (const product of productList) {
	// 		const data = {
	// 			id: product.id,
	// 			slug: product.apelido,
	// 			name: product.name ? product.name : product.apelido,
	// 			sku: product.sku,
	// 			category: product.category,
	// 			status: product.bloqueado ? false : true,
	// 			url: product.url,
	// 			date: new Date()
	// 		}
	// 		await products.save(data);

	// 		const imageList = await images.fetch(product.id);
	// 		for (const image of imageList) {
	// 			const data = {
	// 				id: image.id,
	// 				path: image.caminho,
	// 				product: image.produto,
	// 				cover: image.principal,
	// 				uri: image.resource_uri,
	// 			};

	// 			await images.save(data);
	// 		}
	// 	}
}

module.exports = main;