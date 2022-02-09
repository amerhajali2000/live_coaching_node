const Data= require("../model/Data")
const Category=require('../model/Category')
const cloudinary=require("../helpers/cloudinary")

var functiond={
    addData:async(req,res)=>{
        try {
            const result= await cloudinary.uploader.upload(req.file.path)
            const data=new Data({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                cv:{
                    url:result.secure_url,
                    cvId:result.public_id
                },
                description:req.body.description,
                category:req.body.category,
                dates:req.body.dates
            })
            data.save(function(err,result) {
                if(err){
                    res.json({seccuss:false, msg:err.message})
                }else{
                    Category.findOneAndUpdate({_id:req.body.category},{$push:{data:data._id}}).exec()
                    res.json({seccuss:true, result})
                }
            })    
        } catch (error) {
            res.json({seccuss:false, msg:error.message})
        }
        
    },
    getData:async(req,res)=>{
        Data.find({category:req.params.id}).exec(function (err,result) {
            if(result!=null){
                res.json({seccuss:true, result})
            }else{
                res.json({seccuss:false, msg:"لا يوجد بيانات مخزنة في هذا القسم"})
            }
        })
    }
}

module.exports=functiond