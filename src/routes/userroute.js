const express = require("express")
const Usercontroller = require("../controllers/Usercontroller")


const router = express.Router()




router.post('/add-user', Usercontroller.adduser)


module.exports = router;