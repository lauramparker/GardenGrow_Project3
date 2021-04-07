const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: "Enter a name for transaction"
	},
	altername: {
		type: String,
		trim: true,
	},

	sowinstructions: {
		type: String,
		trim: true,

	},
	spaceinstructions: {
		type: String,
		trim: true,
	},
	haverstinstructions: {
		type: String,
		trim: true,
	},
	compatibleplants: {
		type: String,
		trim: true,
	},
	avoidinstructions: {
		type: String,
		trim: true,
	},
	culinaryhints: {
		type: String,
		trim: true,
	},
	culinarypreventions: {
		type: String,
		trim: true,
	},
	url: {
		type: String,
		trim: true,
	},
	minPlants: {
		type: Number,
		trim: true,
	},
	maxPlants: {
		type: Number,
		trim: true,
	}
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = {
  plantSchema,
  Plant
};
