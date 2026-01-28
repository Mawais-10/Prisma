const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = prisma




async function addnewtask(title, description, Userid,CreatedAt) {


    try {
        const addnewtaskdata = await prisma.Tasks.create({
            data: {
                title,
                description,
                CreatedAt,
                user: {
                    connect: { id: Userid }
                }
            },
            include: {
                Users: true
            },
        })

        return addnewtaskdata
    } catch (error) {
        console.log(error)
        throw new Error("error");

    }

}

async function Getalltasks() {



    try {
        const getalltasks = await prisma.Tasks.findMany({

            include: {
                Users: true

            }
        })


        return getalltasks
    } catch (error) {
        console.log(error)
        throw new Error("error");

    }

}


async function Gettaskbyid(id) {
    try {
        const gettasksbyid = await prisma.Tasks.findUnique({
            where: { id },
            include: {
                Users: true
            }


        })
        if (!gettasksbyid) {
            throw new Error("Task not found");

        }
        return gettasksbyid
    } catch (error) {
        throw new Error("error");


    }

}

async function Updatedtask(id, newtitle, update_description) {
    try {
        const taskupdate = await prisma.Tasks.Update({
            where: { id },
            data: {
                title: newtitle,
                description: update_description
            },
            include: {
                Users: true
            }


        })
        return taskupdate
    } catch (error) {
        throw new Error("error");


    }

}



async function Deletetask(id) {
    try {
        const deltask = await prisma.Tasks.delete({
            where: { id },
            include: { Users: true }
        })
        return deltask;

    } catch (error) {
        throw new Error("error");


    }
}

module.exports = { addnewtask, Getalltasks, Gettaskbyid, Updatedtask, Deletetask }