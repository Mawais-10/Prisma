const { PrismaClient } = require("@prisma/client")


const prisma = new PrismaClient()




async function addnewtask(title, description, Userid) {


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

module.exports = { addnewtask }