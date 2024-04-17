const baseUrl = "https://api.awsli.com.br";

async function fetchAll(id) {
  try {

    let images = [];
    let nextPage = `/v1/produto_imagem/?produto=${id}`;
		console.log(baseUrl + nextPage)
    while (nextPage) {
      const response = await fetch(baseUrl + nextPage, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "chave_api a51b326611c437437e00 aplicacao 79412469-36ed-4d67-8649-f7a153ebd8a4",
        },
      });

			// console.log(response.ok);
			// if (!response.ok) {
			// 	throw new Error("Network response was not OK");
			// }

      const { objects, meta } = await response.json();
      images.push(...objects);
      nextPage = meta.next;
			console.log(images);
    }
    return images;
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error);
    throw error; // Rejeitar a promessa com o erro para que seja tratado no nível superior
  }
}

module.exports = { fetchAll };
