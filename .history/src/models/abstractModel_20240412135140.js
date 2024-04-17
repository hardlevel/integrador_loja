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
		let model = this.model;
    return await prisma[this.model].findUniqueOrThrow({ where: { id: id } });
  }

	async findByField(field, value) {
		let model = this.model;
		const data = await prisma.model.findUniqueOrThrow({ where: { field: value } });
    return data;
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

class ModelFactory {
  static createModel(modelName) {
    class DynamicModel extends AbstractModel {
      constructor() {
        super(modelName);
      }
    }

    return DynamicModel;
  }
}

module.exports = { AbstractModel, ModelFactory };
