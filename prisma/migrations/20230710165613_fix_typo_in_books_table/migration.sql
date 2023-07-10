/*
  Warnings:

  - You are about to drop the column `availabe` on the `Books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Books" DROP COLUMN "availabe",
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true;
