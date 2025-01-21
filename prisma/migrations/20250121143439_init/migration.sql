/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Contract` DROP FOREIGN KEY `Contract_ownerId_fkey`;

-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_ownerId_fkey`;

-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_userId_fkey`;

-- DropIndex
DROP INDEX `Contract_ownerId_fkey` ON `Contract`;

-- DropIndex
DROP INDEX `Proposal_ownerId_fkey` ON `Proposal`;

-- DropIndex
DROP INDEX `Transaction_userId_fkey` ON `Transaction`;

-- AlterTable
ALTER TABLE `Contract` MODIFY `ownerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Proposal` MODIFY `ownerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Transaction` MODIFY `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `User`;
