const { Plot } = require("../models");

module.exports = {
	findAll: (req, res) => {
		Plot
			.find(req.query)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},

	findById: (req, res) => {
		Plot
			.find(req.params.id)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	}
};