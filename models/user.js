// User model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
	lastName: {
		type: String,
		required: false,
	},
	firstName: {
		type: String,
		required: false,
	},
	userName: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	profilePicture: {
		type: String,
		required: false,
	},
	sub: String,
	gardens : [{
		type: Schema.Types.ObjectId,
		ref: "Garden"
	}]

});

const User = mongoose.model("User", userSchema);

module.exports = User;