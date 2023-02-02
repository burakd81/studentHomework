const express = require('express');

const homework = require("./homework");
const student = require("./student");
const homeworkstatus = require("./homeworkstatus");


const router = express.Router();

router.use("/homework",homework);
router.use("/student",student);
router.use("/homeworkstatus",homeworkstatus);

module.exports=router;