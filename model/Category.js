const mongoose = require('mongoose');

const CategorySchema =  mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    image:{
        type: String,
    },
    imageId:{
        type:String
    }
})


module.exports= mongoose.model('category', CategorySchema);
