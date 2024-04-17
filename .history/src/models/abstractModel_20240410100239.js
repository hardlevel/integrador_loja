// abstractModel.js
class AbstractModel {
	constructor(prisma) {
			this.prisma = prisma;
	}

	async create(data) {
			return await this.prisma.model.create({ data });
	}

	async findById(id) {
			return await this.prisma.model.findUnique({ where: { id } });
	}

	async update(id, data) {
			return await this.prisma.model.update({ where: { id }, data });
	}

	async delete(id) {
			return await this.prisma.model.delete({ where: { id } });
	}

	async findAll() {
			return await this.prisma.model.findMany();
	}
}

module.exports = AbstractModel;
