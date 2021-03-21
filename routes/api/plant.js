const plants = require("../../controllers/plantsController");
const router = require("express").Router();

router.route("/")
	.get(plants.findAll);

router.route("/:id")
	.get(plants.findById);

module.exports = router;