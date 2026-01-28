const userservice = require("../Services/taskservice")





exports.addtask = async (req, res) => {
    try {
        const { title, description, Userid, CreatedAt } = req.body
        const addedtask = await userservice.addnewtask(title, description, Userid, new Date(CreatedAt))
        res.status(201).json(addedtask)
    } catch (error) {
        throw new Error("error");
    }

}

exports.getalltasks = async (req, res) => {
    try {
        const alltask = await userservice.Getalltasks()
        res.status(201).json(alltask)
    } catch (error) {
        throw new Error("error");


    }
}

exports.Gettaskbyid = async (req, res) => {
    try {
        const gettaskbyid = await userservice.Gettaskbyid(parseInt(res.params.id))
        if (!gettaskbyid) {
            res.status(400).json({
                message: "task not found"
            })
        }
        res.status(201).json(alltask)
    } catch (error) {
        throw new Error("error");


    }
}

exports.Gettaskbyid = async (req, res) => {
    try {
        const gettaskbyid = await userservice.Gettaskbyid(parseInt(res.params.id))
        if (gettaskbyid) {
            res.status(200).json(gettaskbyid)
        }
        else {
            res.status(404).json({
                message: "task not found"
            })
        }
        res.status(201).json(alltask)
    } catch (error) {
        throw new Error("error");


    }
}


exports.Updatetask = async (req, res) => {
    try {
        const { title, description } = req.body
        const gettaskbyid = await userservice.Updatedtask(parseInt(res.params.id), title, description)
        res.status(200).json(gettaskbyid)
    } catch (error) {
        throw new Error("error");


    }
}


exports.deletetASK = async (req, res) => {
    try {
        const deltask = await userservice.Deletetask(parseInt(res.params.id))
        res.status(200).json({ message: `task is del by ${deltask}` })
    } catch (error) {
        throw new Error("error");


    }
}