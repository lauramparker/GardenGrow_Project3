const router = require("express").Router();
const plantRoutes = require("./plant-routes");
const gardenRoutes = require("./garden-routes");
const plotRoutes = require("./plot-routes");
const userRoutes = require("./user-routes");

router.use("/plants", plantRoutes);
router.use("/gardens", gardenRoutes);
router.use("/plots", plotRoutes);
router.use("/users", userRoutes);

module.exports = router;