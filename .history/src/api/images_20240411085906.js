async function fetchAll(id) {
  try {
    let images = [];
    let nextPage = `/v1/produto_imagem/?produto=${id}`;

    while (nextPage) {
      const response = await fetch(baseUrl + nextPage, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "chave_api a51b326611c437437e00 aplicacao 79412469-36ed-4d67-8649-f7a153ebd8a4",
        },
      });

      const { objects, meta } = await response.json();
      console.log(objects);

      if (Array.isArray(objects) && objects.length > 0) {
        images.push(...objects);
      }

      if (meta) {
        nextPage = meta.next;
      } else {
        nextPage = "";
      }
    }

    return images;
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error);
    throw error;
  }
}

module.exports = { fetchAll };
