// abstractModel.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AbstractModel {
  constructor(model) {
    this.model = model;
  }

	async create(data) {
    const { id, ...restData } = data; // Separe o id do restante dos dados

    return await prisma[this.model].upsert({
        where: { id: id }, // Use o id separadamente
        update: { ...restData }, // Use o restante dos dados para a atualização
        create: { ...data }, // Use todos os dados para a criação
    });
}


  async findById(id) {
		console.log(id);
    return await prisma[this.model].findUnique({ where: { id } });
  }

  async update(id, data) {
    return await prisma[this.model].update({ where: { id }, data });
  }

  async delete(id) {
    return await prisma[this.model].delete({ where: { id } });
  }

  async findAll() {
    return await prisma[this.model].findMany();
  }
}

module.exports = AbstractModel;
