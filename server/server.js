const express = require('express');


const cors=require("cors")
const app = express();

const route=require("../server/db/routes.js")
const route1= require("../server/db/CartRoutes.js")

app.use(express.json())



app.use(route)
app.use(route1)

var corsOptions = {
    origin: 'http://127.0.0.1:5173',
    methods: "GET , POST, DELETE, PUT, PATCH, HEAD",
    credentials: true,
  }
app.use(cors(corsOptions));

const PORT = 5000;


app.listen(PORT,(e)=>{
    if (!e) {
        console.log(`Server running on ${PORT}`);
    }else{
        console.log(e);
    }
})