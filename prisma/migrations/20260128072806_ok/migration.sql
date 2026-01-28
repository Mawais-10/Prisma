-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_Usersid_fkey";

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_Usersid_fkey" FOREIGN KEY ("Usersid") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
