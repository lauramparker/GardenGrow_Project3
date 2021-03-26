const router = require("express").Router();
const plantRoutes = require("./plant");
const gardenRoutes = require("./garden");
const plotRoutes = require("./plot");
const userRoutes = require("./users");

router.use("/plants", plantRoutes);
router.use("/gardens", gardenRoutes);
router.use("/plots", plotRoutes);
router.use("/users", userRoutes);

module.exports = router;