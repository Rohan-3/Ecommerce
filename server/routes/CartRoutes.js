const express=require("express")
// const cors=require("cors")
const cartSchema = require("../model/CartSchema.js")
// require("./conn.js")

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
    res.send(data)
})

module.exports=route;