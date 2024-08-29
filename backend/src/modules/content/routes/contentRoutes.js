//src/modules/content/routes/contentRoute.js
const router = require("express").Router();

const authenticate = require("../../../middleware/authMiddleware");
const contentController = require("../controllers/contentController");
const upload = require("../../../middleware/multerMiddleware");

router.use(authenticate);
router.post(
  "/",
  upload.array("content", 5),
  contentController.submitContent
);

router.put(
  "/:id",
  contentController.verifyContent
);
router.get("/", authorize(["getContents"]), contentController.getContents);

router.delete(
  "/:id",
  contentController.deleteContent
);

router.get("/my-contents", contentController.getContentByLoggedInUser);

module.exports = router;