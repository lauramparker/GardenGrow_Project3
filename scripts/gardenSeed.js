var mongoose = require("mongoose");
var gardenSeed = require("../data/gardenData");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plantDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


db.Garden.deleteMany({})
	.then(() => db.Garden.collection.insertMany(gardenSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});