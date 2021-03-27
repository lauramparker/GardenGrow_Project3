var mongoose = require("mongoose");
var plotSeed = require("../data/plotData");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plantDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


db.Plot.deleteMany({})
	.then(() => db.Plot.collection.insertMany(plotSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});