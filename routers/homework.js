const express = require('express');
const {getCreate,getAllHomework,updateHomework,deleteHomework} = require("../controllers/homework");
const router = express.Router();


router.get("/list",getAllHomework);

router.use(express.urlencoded({extended:false}))
router.use(express.json())
router.post("/create",getCreate);
router.put("/edit/:id",updateHomework);
router.delete("/delete/:id",deleteHomework);



module.exports = router;