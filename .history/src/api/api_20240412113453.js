async function fetchAll(config, model, id = null) {
	const baseUrl = config.apiUrl;
  try {
    let data = [];
    let nextPage = '';

    while (nextPage) {
      const response = await fetch(baseUrl + nextPage, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `chave_api ${config.chave_api} aplicacao ${config.aplicacao}`,
        },
      });

			if (!response.ok) {
				throw new Error("Network response was not OK");
			}

      const { objects, meta } = await response.json();
			//console.log(objects)
      data.push(...objects);
      nextPage = meta.next;
    }
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error);
    throw error; // Rejeitar a promessa com o erro para que seja tratado no nível superior
  }
}

async function fetch(config, model, id = null) {
	const baseUrl = `${config.apiUrl}/v1/produto/${id}`;
  try {
		const response = await fetch(baseUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					`chave_api ${config.chave_api} aplicacao ${config.aplicacao}`,
			},
		});

		if (!response.ok) {
			throw new Error("Network response was not OK");
		}

		const data = await response.json();
		//console.log(objects)
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error);
    throw error; // Rejeitar a promessa com o erro para que seja tratado no nível superior
  }
}


module.exports = { fetchAll, fetch };
