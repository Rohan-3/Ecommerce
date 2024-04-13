const mongoose = require('mongoose');
require('dotenv').config();
const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connected');
  })
  .catch((e) => {
    console.log(e);
  });
