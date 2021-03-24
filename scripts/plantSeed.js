var mongoose = require("mongoose");
var plantSeed = require("../data/plantData");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plantDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


db.Plant.deleteMany({})
	.then(() => db.Plant.collection.insertMany(plantSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});