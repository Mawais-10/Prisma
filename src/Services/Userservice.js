const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = prisma





async function AddnewUser(name) {
    try {
        const adduser = await prisma.Users.create({
            data: {
                name
            }
        })
        return adduser;
    } catch (error) {
        console.error(e)
        throw (e)
    }
}


module.exports = { AddnewUser }