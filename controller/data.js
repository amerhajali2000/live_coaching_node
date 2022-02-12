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
                times:req.body.times
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
    },
    updateData:async(req,res)=>{
        const data= await Data.findOne({_id:req.body.id}).exec()
        if(data.cv!=null){
            var result= await cloudinary.uploader.destroy(data.cv.cvId)
        }
        var newresult= await cloudinary.uploader.upload(req.file.path)
        var update={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            cv:{
                url:newresult.secure_url,
                cvId:newresult.public_id
            },
            description:req.body.description
        }
        Data.findOneAndUpdate({_id:req.body.id},{update}).exec(function (err) {
            if(err){
                res.json({seccuss:false,msg:err.message})
            }else{
                res.json({seccuss:true, msg:"تم تحديث المعلومات"})
            }
        })
    },
    deleteData:async(req,res)=>{
        Data.findOneAndDelete({_id:req.params.id}).exec(function (err) {
            if(err){
                res.json({seccuss:false,msg:err.message})
            }else{
                res.json({seccuss:true, msg:"تم الحذف"})
            }
        })
    }
}

module.exports=functiond