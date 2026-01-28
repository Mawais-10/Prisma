const express = require("express")
const Taskcontroller = require("../controllers/Taskcontroller")


const router = express.Router()




router.post('/add-task', Taskcontroller.addtask)

router.get('/get_alltasks', Taskcontroller.getalltasks)

router.get('/:id', Taskcontroller.Gettaskbyid)

router.put('/:id', Taskcontroller.Updatetask)

router.delete('/:id', Taskcontroller.deletetASK)


module.exports = router;