const express = require('express');


const cors=require("cors")
const app = express();

const route=require("../server/db/routes.js")

app.use(express.json())



app.use(route)

app.use(cors())

const PORT = 2000;


app.listen(PORT,(e)=>{
    if (!e) {
        console.log(`Server running on ${PORT}`);
    }else{
        console.log(e);
    }
})