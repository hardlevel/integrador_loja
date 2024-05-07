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
		try {
			return await prisma[this.model].findUniqueOrThrow({ where: { id: id } });
		} catch (error){
			console.log(error);
		}
  }

	async findByField(field, value) {
		try {
			return await prisma[this.model].findMany({ where: { [field]: value } });
		} catch (error) {
			console.log(error, this.model, field, value);
		}
  }

  async update(id, data) {
		try {
			return await prisma[this.model].update({ where: { id }, data });
		} catch (error){
			console.log(error);
		}
  }

  async delete(id) {
		try {
			return await prisma[this.model].delete({ where: { id } });
		} catch (error){
			console.log(error);
		}
  }

  async findAll() {
		try {
			return await prisma[this.model].findMany();
		} catch (error){
			console.log(error);
		}
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
