const mongoose = require("mongoose");
const Plot = require("./plot");


const Schema = mongoose.Schema;

const gardenSchema = new Schema({
  plot: {
    type: Object,
    required: false,
  },

  userInfo: {
    type: String,
    trim: true,
    required: "Enter a userid/email for transaction"
  },
  gardenName: {
    type: String,
    trim: true,
  },

  dimensions: {
    type: Number,
    trim: true,

  },
  dimensionsWidth: {
    type: Number,
    trim: true,
  },

  dateRangeMinimum: Number,
  dateRangeMaximum: Number,

  // // function to find the minimum date range
  // findMinDateRange: function (cb) {

  // },

  // // function to find the maximum date range
  // findMinDateRange: function (cb) {

  // },



});

const Garden = mongoose.model("Garden", gardenSchema);

module.exports = Garden;
