const router = require("express").Router();
const plantRoutes = require("./plant");
const gardenRoutes = require("./garden-api");
const plotRoutes = require("./plot");
const userRoutes = require("./user");

router.use("/plants", plantRoutes);
router.use("/gardens", gardenRoutes);
router.use("/plots", plotRoutes);
router.use("/users", userRoutes);

module.exports = router;