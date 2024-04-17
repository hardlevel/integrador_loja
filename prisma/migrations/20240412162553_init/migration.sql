/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Price` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "desc" TEXT,
    "name" TEXT NOT NULL,
    "uri" TEXT,
    "url" TEXT,
    "resource_uri" TEXT,
    "external_id" TEXT,
    "related_category" TEXT
);
INSERT INTO "new_Category" ("desc", "external_id", "id", "name", "related_category", "resource_uri", "uri", "url") SELECT "desc", "external_id", "id", "name", "related_category", "resource_uri", "uri", "url" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");
CREATE TABLE "new_Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "path" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "cover" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Image" ("cover", "id", "path", "product", "uri") SELECT "cover", "id", "path", "product", "uri" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE UNIQUE INDEX "Image_id_key" ON "Image"("id");
CREATE TABLE "new_Price" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "full" TEXT,
    "coust" TEXT,
    "product" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "consult" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Price" ("consult", "coust", "full", "id", "product", "uri") SELECT "consult", "coust", "full", "id", "product", "uri" FROM "Price";
DROP TABLE "Price";
ALTER TABLE "new_Price" RENAME TO "Price";
CREATE UNIQUE INDEX "Price_id_key" ON "Price"("id");
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "category" TEXT,
    "categoryName" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateCreated" TEXT,
    "dateModified" TEXT,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "price" TEXT,
    "images" TEXT,
    "height" TEXT,
    "width" TEXT,
    "depth" TEXT,
    "weight" TEXT
);
INSERT INTO "new_Product" ("category", "categoryName", "createdAt", "dateCreated", "dateModified", "depth", "description", "height", "id", "images", "name", "price", "sku", "slug", "status", "url", "weight", "width") SELECT "category", "categoryName", "createdAt", "dateCreated", "dateModified", "depth", "description", "height", "id", "images", "name", "price", "sku", "slug", "status", "url", "weight", "width" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
