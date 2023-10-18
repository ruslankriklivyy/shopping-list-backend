-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_icon_id_fkey";

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "icon_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_icon_id_fkey" FOREIGN KEY ("icon_id") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;
