const { Plant } = require("../models");

module.exports = {
	findAll: (req, res) => {
		Plant
			.find(req.query)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},

	findById: (req, res) => {
		Plant
			.find(req.params.id)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	}
};