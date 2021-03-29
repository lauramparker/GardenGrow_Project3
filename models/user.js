// User model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
	lastName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
	},
	userName: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	profilePicture: {
		type: String,
		required: true
	},
	gardens : [{
		type: Schema.Types.ObjectId,
		ref: "Garden"
	}]

});

const User = mongoose.model("User", userSchema);

module.exports = User;