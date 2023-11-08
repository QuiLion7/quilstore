/*
  Warnings:

  - You are about to drop the column `baseProduct` on the `OrderProduct` table. All the data in the column will be lost.
  - Added the required column `basePrice` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "baseProduct",
ADD COLUMN     "basePrice" DECIMAL(8,2) NOT NULL;
