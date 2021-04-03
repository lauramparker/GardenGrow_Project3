const data = require("../data/plant-info.json");
const fs = require('fs');
const path = require('path');
const { dirname } = require("path");

// constants
const PLOT_LENGTH = 24;
const PATH = path.resolve(__dirname, "..", "data", "plant-info.json")

const newData = JSON.parse(JSON.stringify(data), function (key, value) {

	// pull out the numbers from space instructions
	if (key === "spaceInstructions") {

		// regex expression to parse numbers out of the spaceInstructions string
		let numbers = value.match(/\d+/g);

		// if numbers exist in the string, then find and calculate the minumum and maximum number of plants per plot
		if (numbers !== null) {
			let numPlants = [];
			numbers = numbers.map(Number);

			// loop through the numbers and calculate the number of plants per plot 
			numbers.forEach((number, index) => {
				let plants = Math.floor((PLOT_LENGTH / number) ** 2);
				if (plants >= 1) numPlants[index] = plants;
				else numPlants[index] = 1;
			});

			// assign the range of inches the plants can be planted apart
			this.inchesApart = numbers;

			// assign minPlants and maxPlants using values from numPlants[]
			if (numPlants.length === 2) {
				this.minPlants = numPlants[0];
				this.maxPlants = numPlants[1];
			}
			else if (numPlants.length === 1) {
				this.minPlants = numPlants[0];
				this.maxPlants = numPlants[0];
			}
			else {
				this.minPlants = "data unavailable";
				this.maxPlants = "data unavailable";
			}

		} else {
			this.inchesApart = "data unavailable";
			this.minPlants = "data unavailable";
			this.maxPlants = "data unavailable";
		}
	}

	// rename all the name keys to lowercase name
	// if (key === "Name") {
	// 	this.name = value;
	// 	return;
	// }
	return value;
});

fs.writeFile(PATH, JSON.stringify(newData), (err) => {
	if (err) console.error(err);
	else console.log("File successfully updated");
});

console.log(newData);