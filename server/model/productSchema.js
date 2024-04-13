const mongoose = require('mongoose');
const clothingSchema = new mongoose.Schema({
  img: {
    type: Array,
    require: true,
  },
  Brand: {
    type: String,
    require: true,
  },
  ProductId: {
    type: Number,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Price: {
    type: Number,
    require: true,
  },
  Color: {
    type: String,
    require: true,
  },
  Size: {
    type: Array,
    require: true,
  },
  Qty: {
    type: Number,
    require: true,
  },
  Material: {
    type: String,
    require: true,
  },
  Pattern: {
    type: String,
    require: true,
  },
  FitType: {
    type: String,
    require: true,
  },
  Length: {
    type: Number,
    require: true,
  },
  SleeveType: {
    type: String,
    require: true,
  },
  Description: {
    type: Array,
    require: true,
  },
});

const cs = new mongoose.model('Clothings', clothingSchema);
module.exports = cs;
