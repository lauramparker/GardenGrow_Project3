// This file contains the schema for a single 2x2 plot 
const { Schema } = require("mongoose");
const Plant = require("./plants");

const PLOT_SIZE_SQFT = 4;

const plotSchema = new Schema({
	plant: {
		type: Plant,
		required: false,
	},
	spaceMinimum: Number,
	spaceMaximum: Number,
	maxPlants: Number,
	minPlants: Number,
});

// need to find the number of plants per square foot based on recommended spacing

// function to find the minimum number of plants 
plotSchema.methods.findMinPlants = function (cb) {
    
};

// function to find the maximum number of plants
plotSchema.methods.findMaxPlants = function (cb) {

};
// id (plant id from Plants Table)
// name / altername
// sow instructions
// Space instructions (min column & max column)  - INTEGER
// **recommended number of plants (2 cols? min & max?) (we have this info/per sq foot)
//         **this is the number of plants per 2ft x 2ft square plot that we recommend to the user
// # sqfoot column = default of 4
// harvest instructions (is there a range here?)
// compatible plants
// imageSrc (Laura & Taylor need this for Plot Cards)