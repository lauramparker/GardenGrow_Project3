const plot = require("./plotData");

let plotArray = [];

for (let i = 0; i < 10; i++) {
	plotArray.push(plot);
}

let gardenSeed = [{
	plots: plotArray,
	userInfo: "Random User 1",
	gardenName: "Garden 1",
	length: 4,
	width: 4,
	dateRangeMinimum: null,
	dateRangeMaximum: null,
}];

module.exports = gardenSeed;