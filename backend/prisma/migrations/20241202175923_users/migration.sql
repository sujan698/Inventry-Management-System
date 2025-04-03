/*
  Warnings:

  - You are about to drop the column `role_id` on the `users` table. All the data in the column will be lost.
  - Added the required column `roleId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_role_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role_id",
ADD COLUMN     "roleId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
