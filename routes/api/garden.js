const gardens = require("../../controllers/gardenController");
const router = require("express").Router();

router
	.route("/")
	.get(gardens.findAll)
	.post(gardens.create);

router
	.route("/:id")
	.get(gardens.findById)
	.put(gardens.update)
	.delete(gardens.remove);

module.exports = router;