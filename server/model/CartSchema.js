const mongoose=require("mongoose")

const cartSchema= new mongoose.Schema({
    ProductId:{
        type:Number,
        require:true
    }
})

const cart=new mongoose.model("Cart",cartSchema)
module.exports= cart