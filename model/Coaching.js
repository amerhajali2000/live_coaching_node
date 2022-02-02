const mongoose = require('mongoose');

const CoachingSchema =  mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String
    },
    cv:{
        type:String
    }
})


module.exports= mongoose.model('coach', CoachingSchema);
