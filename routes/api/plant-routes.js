const plants = require("../../controllers/plantController");
const router = require("express").Router();

// route is /api/plants/
router
	.route("/")
	.get(plants.findAll);

// route is /api/plants/:id
router
	.route("/:id")
	.get(plants.findById);

module.exports = router;