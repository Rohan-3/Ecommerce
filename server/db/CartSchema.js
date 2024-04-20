const mongoose=require("mongoose")

const cartSchema= new mongoose.Schema({
    ProductId:{
        type:Number,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    Brand:{
        type:String,
        require:true
    },
    Price:{
        type:Number,
        require:true
    },
    Qty:{
        type:Number,
        require:true
    },
    Size:{
        type:String,
        require:true
    }
})

const cart=new mongoose.model("Cart",cartSchema)
module.exports= cart