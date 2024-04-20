const express=require("express")
// const cors=require("cors")
const cartSchema = require("./CartSchema.js")
require("./conn.js")

const route=express.Router()
route.use(express.json())
// route.use(cors())

route.post("/addCart",async(req,res)=>{
    let data = new cartSchema(req.body);
    await data.save();
    res.send("Item added to cart")
})

route.get("/getCart",async(req,res)=>{
    let data = await cartSchema.find();
    let total = data.map((temp)=>{return temp.Price*temp.Qty});
    let amount = total.reduce((sum,num)=>sum+num,0);
    let items=data.length;
    let fullData = {data,amount,items};
    res.send(fullData)
})

route.delete("/removeCart/:id",async(req,res)=>{
    let id = req.params.id;
    let data = await cartSchema.find({ProductId:id});
    await cartSchema.findByIdAndDelete(data[0]._id,data[0]);
    res.send("Item removed from cart")
})



module.exports=route;