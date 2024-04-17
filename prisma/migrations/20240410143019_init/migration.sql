-- AlterTable
ALTER TABLE "Product" ADD COLUMN "description" TEXT;

-- CreateTable
CREATE TABLE "Price" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full" DECIMAL NOT NULL,
    "coust" DECIMAL,
    "product" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "consult" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT,
    "name" TEXT NOT NULL,
    "uri" TEXT,
    "url" TEXT,
    "resource_uri" TEXT,
    "external_id" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Price_id_key" ON "Price"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");
