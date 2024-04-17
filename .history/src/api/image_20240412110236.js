async function fetchAll(config, id) {
	const baseUrl = config.apiUrl;
  try {
    const response = await fetch(`${baseUrl}/v1/produto_imagem/?produto=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
					`chave_api ${config.chave_api} aplicacao ${config.aplicacao}`,
      },
    });

    const { objects } = await response.json();

    if (Array.isArray(objects)) {
      return objects.filter(obj => obj !== undefined);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error);
    throw error;
  }
}

module.exports = { fetchAll };
