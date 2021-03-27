const plots = require("../../controllers/plotController");
const router = require("express").Router();

// route is /api/plots/
router
	.route("/")
	.get(plots.findAll);

// route is /api/plots/:id
router
	.route("/:id")
	.get(plots.findById);

module.exports = router;