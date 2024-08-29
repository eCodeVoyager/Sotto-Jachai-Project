//src/modules/verify/routes/verifyRoutes.js
const router = require("express").Router();
const { getContentByKey } = require("../controllers/verifyController");

router.get("/:key", getContentByKey);

module.exports = router;