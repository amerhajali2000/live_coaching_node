const express=require('express');
const router=express.Router();
const dataController=require("../controller/data")

router.post("/addData", dataController.addData)
router.get("/getData/:id",dataController.getData)

module.exports=router