const userservice = require("../Services/taskservice")





exports.addtask = async (req, res) => {
    try {
        const { title, description, Usersid, CreatedAt } = req.body
        const addedtask = await userservice.addnewtask(title, description, Usersid, new Date(CreatedAt))
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
        const gettaskbyid = await userservice.Gettaskbyid(parseInt(req.params.id))
        console.log(gettaskbyid)
        if (gettaskbyid) {
            res.status(200).json(gettaskbyid)
        }
        else {
            res.status(404).json({
                message: "task not found"
            })
        }
         
    } 
   
    catch (error) {
         res.status(500).json({
            message: "errro while fatehing the task"
        })
    }
}


exports.Updatetask = async (req, res) => {
    try {
        const { title, description } = req.body
        console.log(title, description)
        const gettaskbyid = await userservice.Updatedtask(parseInt(req.params.id), title, description)
        res.status(201).json(gettaskbyid)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "error bhai sahab"
        })
    }
}


exports.deletetASK = async (req, res) => {
    try {
        const deltask = await userservice.Deletetask(parseInt(req.params.id))
        res.status(200).json({ message: `task is del by ${deltask.id}` })
    } catch (error) {
        throw new Error("error");


    }
}