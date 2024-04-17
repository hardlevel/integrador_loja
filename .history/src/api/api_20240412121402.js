async function fetchAll(config, type, id = null) {
	const baseUrl = config.apiUrl;
  try {
    let data = [];
		let nextPage = '';
		if (id){
			nextPage = type.apiAll;
		} else {
			nextPage = type.apiAll + id;
		}

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
				throw new Error("Network response was not OK: ", response.error, type, id);
			}

      const { objects, meta } = await response.json();
			//console.log(objects)
      data.push(...objects);
      nextPage = meta.next;
    }
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error, type, id);
    throw error; // Rejeitar a promessa com o erro para que seja tratado no nível superior
  }
}

async function fetchOne(config, type, id = null) {
	const baseUrl = `${config.apiUrl}${type.apiSingle}${id}`;
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
			throw new Error("Network response was not OK: ", response.error, type, id);
		}

		const data = await response.json();
		//console.log(objects)
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error, type, id);
    throw error; // Rejeitar a promessa com o erro para que seja tratado no nível superior
  }
}


module.exports = { fetchAll, fetchOne };
