// User model
const mongoose = require("mongoose");
const { gardenSchema } = require("./garden");
const Schema = mongoose.Schema;


const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	gardens: {
		type: Array,
		of: gardenSchema
	},
	image: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;