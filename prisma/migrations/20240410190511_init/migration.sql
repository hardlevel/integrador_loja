-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "cover" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Image" ("id", "path", "product", "uri") SELECT "id", "path", "product", "uri" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE UNIQUE INDEX "Image_id_key" ON "Image"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
