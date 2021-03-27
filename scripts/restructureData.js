const data = require("../data/plant-info.json");

const newData = JSON.parse(JSON.stringify(data), function (key, value) {
	// rename all the name keys to lowercase name
	if (key === "Name") {
		this.name = value;
		return;
	}

	// pull out the numbers from space instructions
	if (key === "spaceInstructions") {
		let numbers = value.match(/\d+/g);
		if (numbers !== null) {
			numbers = numbers.map(Number);
			this.inchesApart = numbers;
			return;
		} else {
			// do something
		}

		// console.log(numbers);
	}
	return value;
});

console.log(newData);