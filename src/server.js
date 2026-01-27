require("dotenv").config()
const userroutes = require("./routes/userroute")

const express = require("express")
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api/adduser', userroutes)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)

})
