const mongoose=require('mongoose');

const t = new Date();

const date = ('0' + t.getDate()).slice(-2);
const month = ('0' + (t.getMonth() + 1)).slice(-2);
const year = t.getFullYear();

const BookingSchema =  mongoose.Schema({ 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    meal:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'meal'
    },
    resturant:{
        type:String
    },
    date:{
        type:String,
        default:`${date}/${month}/${year}`
    }
    
})


module.exports= mongoose.model('booking', BookingSchema);