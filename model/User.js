const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String
    }
})

module.exports= mongoose.model('user', UserSchema);
