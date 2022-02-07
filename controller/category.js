const Category=require('../model/Category')
const cloudinary=require('../helpers/cloudinary')

var functionCategory={
    addCategory:async(req,res)=>{
        const result= await cloudinary.uploader.upload(req.file.path)
        const category=new Category({
            name:req.body.name,
            image:result.secure_url,
            imageId:result.public_id
        })
        category.save(function(err) {
            if(err){
                res.json({seccuss:false, category})
            }
            else{
                res.json({seccuss:true, category})
            }
        })
    },
    updateImage:async(req,res)=>{
        try {
            const image=await Category.findById({_id:req.params.id}).exec()
        // fs.unlink("1643818496165-Online Personal Trainer-amico.png")
        await cloudinary.uploader.destroy(image.imageId)
        const newResult= await cloudinary.uploader.upload(req.file.path)
        Category.findByIdAndUpdate({_id:req.params.id},{image:newResult.url, imageId:newResult.public_id}).exec(function (err) {
            if(err){
                res.json({seccuss:false, msg:err.message})
            }else{
                res.json({seccuss:true, msg:"تم تحديث الصورة", url:newResult.url})
            }
        })
        } catch (error) {
            res.json(error.message)
        }
    },
    displayCategory:function(req,res){
        Category.find().exec(function(err,result) {
            if(err){
                res.json({seccuss:false, msg:err.message})
            }else{
                res.json({seccuss:true, result:result})
            }
        })
    }
}
module.exports=functionCategory