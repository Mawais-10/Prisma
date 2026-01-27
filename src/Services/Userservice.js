

const { prismaclient } = require("@prisma/client")


const prisma = new prismaclient()




async function Addnewtask(name) {
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


module.exports = { Addnewtask }