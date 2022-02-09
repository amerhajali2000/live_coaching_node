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
    dates:[{
        type:String
    }],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    bookings:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"booking"
    },
    // location:{
    //     latitude:Number,
    //     longitude:Number
    // }
})


module.exports= mongoose.model('data', DataSchema);
