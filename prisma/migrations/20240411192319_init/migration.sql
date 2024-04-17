-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Price" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
