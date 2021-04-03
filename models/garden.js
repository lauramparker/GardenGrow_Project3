/* eslint-disable no-mixed-spaces-and-tabs */
const mongoose = require("mongoose");
const { plotSchema } = require("./plot");


const Schema = mongoose.Schema;

const gardenSchema = new Schema({
	plots: {
		type: Array,
		of: plotSchema,
		required: false,
	},
  
	gardenName: {
		type: String,
		trim: true,
	},

	length: {
		type: Number,
		trim: true,

	},
	width: {
		type: Number,
		trim: true,
	},
	dateRangeMinimum: Date,
	dateRangeMaximum: Date,

	// plot: {
	//     type: Schema.Types.ObjectId,
	//     ref: "Plot",
	//     required: false,

	// },

	// // function to find the minimum date range
	// findMinDateRange: function (cb) {

	// },

	// // function to find the maximum date range
	// findMinDateRange: function (cb) {

	// },



});

const Garden = mongoose.model("Garden", gardenSchema);

module.exports = {
	gardenSchema,
	Garden,
};
