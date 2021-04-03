/* eslint-disable no-mixed-spaces-and-tabs */
// Defines the methods for usersController
// ============================================================================
const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		db.User.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findByEmail: function(req, res) {
		db.User.find({email: req.params.email })
		    .populate("gardens")
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		db.User.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		db.User.findOneAndUpdate({_id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.User.findOne({ email: req.params.email })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};