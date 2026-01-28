const userservice = require("../Services/Userservice")


exports.adduser = async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name)
        const user = await userservice.AddnewUser(name)
        console.log(user)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ message: "error ha bhai theek kar is ko" })


    }
}