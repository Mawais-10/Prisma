/*
  Warnings:

  - Added the required column `Usersid` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "Usersid" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_Usersid_fkey" FOREIGN KEY ("Usersid") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
