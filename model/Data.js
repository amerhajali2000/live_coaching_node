const mongoose = require('mongoose');

const DataSchema =  mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    description:{
        type:String
    },
    cv:{
        url:String,
        cvId:String
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
})


module.exports= mongoose.model('data', DataSchema);
