const baseUrl = "https://api.awsli.com.br";

async function fetchAll(id) {
  try {
		console.log('id no fetchall', id);
    const response = await fetch(`${baseUrl}/v1/produto_imagem/?produto=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "chave_api a51b326611c437437e00 aplicacao 79412469-36ed-4d67-8649-f7a153ebd8a4",
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
