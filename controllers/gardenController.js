const { Garden } = require("../models");

module.exports = {
	findAll: (req, res) => {
		Garden
			.find(req.query)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},

	findById: (req, res) => {
		Garden
			.findById(req.params.id)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},

	create: (req, res) => {
		Garden
			.create(req.body)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},

	update: (req, res) => {
		Garden
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},

	remove: (req, res) => {
		Garden
			.findById({ _id: req.params.id })
			.then(model => {
				model.remove();
				res.json(model);
			})
			.catch(err => res.status(422).json(err));
	},
};