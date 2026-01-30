require("dotenv").config()
const userroutes = require("./routes/userroute")
const taskroutes = require("./routes/Taskroutes")

const promclient = require("prom-client")



const express = require("express")
const app = express()
app.use(express.json())


const register = new promclient.Registry()

promclient.collectDefaultMetrics({ register })



const httpCounterReq = new promclient.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "route", "status"]
})


register.registerMetric(httpCounterReq)

const PORT = process.env.PORT || 3000

app.get("/metrics", async (req, res) => {
    res.set("Content-Type", register.contentType)
    res.end(await register.metrics())
})



app.use('/api/adduser', userroutes)
app.use('/api/addtask', taskroutes)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)

})
