const userservice = require("../controllers/Usercontroller.js")


exports.adduser = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await userservice.adduser(name)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ message: "error ha bhai theek kar is ko" })


    }
}