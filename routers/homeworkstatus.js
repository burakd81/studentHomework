const express = require('express');
const router = express.Router();
const {createHomeworkStatus,deleteHomeworkStatus,getAllHomeworkStatus,updateHomeworkStatus} = require("../controllers/homeworkstatus");


router.get("/list",getAllHomeworkStatus);

router.use(express.urlencoded({extended:false}))
router.use(express.json())
router.post("/create",createHomeworkStatus);
router.put("/edit/:id",updateHomeworkStatus);
router.delete("/delete/:id",deleteHomeworkStatus);



module.exports = router;