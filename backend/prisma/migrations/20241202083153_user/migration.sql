/*
  Warnings:

  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_role_id_fkey";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" TEXT NOT NULL,
ALTER COLUMN "role_id" DROP NOT NULL;
