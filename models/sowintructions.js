const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sowinstructionsSchema = new Schema({
  easyTogrow: {
    type: Boolean,
    
  },
  instructions: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  sowingdepth: {
      type: String,
      trim: true,
  },
  soiltemperature: {
    type: String,
    trim: true,

  }
});

const Sowinstructions = mongoose.model("Sowinstructions", sowinstructionsSchema );

module.exports = Sowinstructions;

