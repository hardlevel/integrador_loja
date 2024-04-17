async function fetchAll(config) {
	const baseUrl = config.apiUrl;
  try {
    let products = [];
    let nextPage = "/v1/produto?limit=2";

    while (nextPage) {
      const response = await fetch(baseUrl + nextPage, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "chave_api a51b326611c437437e00 aplicacao 79412469-36ed-4d67-8649-f7a153ebd8a4",
        },
      });

			if (!response.ok) {
				throw new Error("Network response was not OK");
			}

      const { objects, meta } = await response.json();
			//console.log(objects)
      products.push(...objects);
      nextPage = meta.next;
    }
    return products;
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error);
    throw error; // Rejeitar a promessa com o erro para que seja tratado no nível superior
  }
}

module.exports = { fetchAll };
