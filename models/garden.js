const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gardenSchema = new Schema({
  userinfo: {
    type: String,
    trim: true,
    required: "Enter a userid/email for transaction"
  },
  gardenname: {
    type: String,
    trim: true,
  },

  dimensions: {
     type: String,
     trim: true,

  },
  dimensionswidth: {
    type: String,
    trim: true,
  },
  daterange: {
  type: Date,
  trim: true,
  default: Date.now
  }
  
});

const Garden = mongoose.model("Garden", gardenSchema);

module.exports = Garden;
