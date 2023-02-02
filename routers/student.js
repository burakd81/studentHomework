const express = require('express');
const {getAllStudent,createStudent,deleteStudent,updateStudent} = require("../controllers/student");
const router = express.Router();


router.use(express.urlencoded({extended:false}))
router.use(express.json())

router.get("/list",getAllStudent);
router.post("/create",createStudent);
router.put("/edit/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);

module.exports = router;