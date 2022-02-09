const mongoose = require('mongoose');

const CategorySchema =  mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    image:{
        type: String,
        dafault:""
    },
    imageId:{
        type:String
    },
    data:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"data"
    }]
})


module.exports= mongoose.model('category', CategorySchema);
