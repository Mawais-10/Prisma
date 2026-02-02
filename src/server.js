require("dotenv").config()
const userroutes = require("./routes/userroute")
const taskroutes = require("./routes/Taskroutes")

const promclient = require("prom-client")



const express = require("express")
const app = express()
app.use(express.json())




promclient.register.clear()

const register = new promclient.Registry()

promclient.collectDefaultMetrics({ register })

const httpCounterReq = new promclient.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "route", "status"],
    registers: [register]
})

app.use((req, res, next) => {
    res.on("finish", () => {
        httpCounterReq.inc({
            method: req.method,
            route: req.route?.path || req.path,
            status: res.statusCode
        })
    })
    next()
})

app.get("/metrics", async (req, res) => {
    res.setHeader("Content-Type", register.contentType)
    res.end(await register.metrics())
})


const PORT = process.env.PORT || 3000
app.use('/api/adduser', userroutes)
app.use('/api/addtask', taskroutes)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)

})
