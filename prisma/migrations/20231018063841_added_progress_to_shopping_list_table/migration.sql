/*
  Warnings:

  - Added the required column `progress` to the `shopping_lists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shopping_lists" ADD COLUMN     "progress" INTEGER NOT NULL;
