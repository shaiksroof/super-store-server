/*
  Warnings:

  - You are about to drop the column `percent` on the `discount` table. All the data in the column will be lost.
  - Added the required column `percentage` to the `discount` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_discount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_discount" ("createdAt", "description", "id", "label", "modifiedAt") SELECT "createdAt", "description", "id", "label", "modifiedAt" FROM "discount";
DROP TABLE "discount";
ALTER TABLE "new_discount" RENAME TO "discount";
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_discount_1" ON "discount"("id");
Pragma writable_schema=0;
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
