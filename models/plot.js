// This file contains the schema for a single 2x2 plot 
const { Schema, model } = require("mongoose");
const { plantSchema } = require("./plants");

const PLOT_SIZE_SQFT = 4; 

const plotSchema = new Schema({
	plant: {
		type: plantSchema,
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

const Plot = model("Plot", plotSchema);

module.exports = {
	plotSchema,
	Plot
};