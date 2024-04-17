// abstractModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class AbstractModel {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await prisma[this.model].create({ data });
    }

    async findById(id) {
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
