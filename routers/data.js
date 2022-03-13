const express=require('express');
const router=express.Router();
const dataController=require("../controller/data")
const multer=require('multer');

const storage  = multer.diskStorage({
    destination :(req , file , cb)=>{
        cb(null,'upload');

    },
    filename :(req,file,cb)=>{
        cb(null , Date.now()+"-"+file.originalname);
    }
});

const filter = (req , file , cb)=>{
    if(file.mimetype !=null){
        cb(null , true);
    }else{
        cb(null , false);
    }
}
const upload = multer({
    storage : storage ,
    fileFilter : filter ,   

});

router.post("/addData",upload.single("image"), dataController.addData)
router.get("/getData/:id",dataController.getData)
router.delete("/deleteData/:id",dataController.deleteData)
router.put("/updateData", upload.single("image"), dataController.updateData)

module.exports=router