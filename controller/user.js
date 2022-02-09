const User=require('../model/User')
const secret=require('../config/dataconfig').secret
const jwt= require('jsonwebtoken');
const Booking=require("../model/Booking")
// const Bcrypt=require('bcrypt')

var functionU={
    register: function(req,res){
            User.findOne({email:req.body.email},function(err,user){
                if(err){
                    res.json({secssus:false,msg:err.message})
                }else if(user){
                    res.json({secssus:false,msg:'هذا الحساب مسجل من قبل'})
                }else{
                 user =new User({
                    name:req.body.name,
                    email:req.body.email,
                    phone:req.body.phone,
                    password:req.body.password
                }).save(function(err){
                     if(err){
                        res.json({secssus:false,msg:err.message})
                     }else{
                        const token = jwt.sign(
                            {
                                name:req.body.name,
                                email:req.body.name,
                                phone:req.body.phone
                            },
                            secret
                            )
                        res.json({secssus:true,msg:'تم تسجيل الحساب', token:token, id:user._id})
                     }
        
                 })
                }
            })  
        
        
     },
     login:function(req,res){
        User.findOne({email:req.body.email},function(err,user){
            if(err){
                res.status(500).send({secssus:false,msg:err})
            }else if(!user){
               res.json({secssus:false,msg:'الحساب غير مسجل من قبل أو البريد الإلكتروني غير صالح'})
            }else if(!req.body.password==user.password){
               res.json({secssus:false,msg:'كلمة المرور غير صحيحة'})
            }
            else{
                const token = jwt.sign(
                    {
                        name:req.body.name,
                        email:req.body.name,
                        phone:req.body.phone
                    },
                    secret
                    )
               User.findOne({email:req.body.email}, function(err, user){
                   res.json({secssus:true,'name': user.name,'email':req.body.email,'id':user.id, token:token})
               })
            }
        })
    },
}

module.exports=functionU