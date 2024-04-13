const express = require('express');
const cors = require('cors');
const cs = require('../model/productSchema.js');
const cloths = require('../model/productSchema.js');
require('../db/conn.js');

const route = express.Router();
route.use(express.json());
route.use(cors());

route.get('/', (req, res) => {});
route.get('/getData', async (req, res) => {
  try {
    let data = await cs.find();
    res.send(data);
    console.log(data);
  } catch (e) {
    res.send(e);
  }
});
route.post('/addData', async (req, res) => {
  let receiveData = new cs(req.body);
  await receiveData.save();

  res.send('dataAdded');
});

route.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await cs.find({ ProductId: id });
    if (data.length > 0) {
      res.send(data);
      console.log(data);
    } else {
      res.send('Invalid product id');
    }
  } catch (err) {
    console.log('Error');
    res.send('Error');
  }
});

module.exports = route;
