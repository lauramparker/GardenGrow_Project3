const data = require("../data/plant-info.json");
const PLOT_LENGTH = 24;

const newData = JSON.parse(JSON.stringify(data), function (key, value) {
	// rename all the name keys to lowercase name
	// if (key === "Name") {
	// 	this.name = value;
	// 	return;
	// }

	// pull out the numbers from space instructions
	if (key === "spaceInstructions") {
		let numbers = value.match(/\d+/g);
		if (numbers !== null) {
			let numPlants = [];
			numbers = numbers.map(Number);
			numbers.forEach((number, index) => {
				let plants = Math.floor((PLOT_LENGTH / number)**2);
				if(plants >= 1) numPlants[index] = plants;
				else numPlants[index] = 1;
			});
			this.inchesApart = numbers;
			this.numPlants = numPlants;
		} else {
			// do something
		}

		// console.log(numbers);
	}
	return value;
});

console.log(newData);