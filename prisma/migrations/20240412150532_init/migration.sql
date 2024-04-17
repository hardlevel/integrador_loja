/*
  Warnings:

  - You are about to drop the column `date` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "category" TEXT,
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
INSERT INTO "new_Product" ("category", "description", "id", "images", "name", "price", "sku", "slug", "status", "url") SELECT "category", "description", "id", "images", "name", "price", "sku", "slug", "status", "url" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
