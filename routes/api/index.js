const router = require("express").Router();
const plantRoutes = require("./plant");
const gardenRoutes = require("./garden");

router.use("/plants", plantRoutes);
router.use("/gardens", gardenRoutes);

module.exports = router;