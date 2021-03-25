const router = require("express").Router();
const plantRoutes = require("./plant");
const gardenRoutes = require("./garden");
const plotRoutes = require("./plot");

router.use("/plants", plantRoutes);
router.use("/gardens", gardenRoutes);
router.use("/plots", plotRoutes);

module.exports = router;