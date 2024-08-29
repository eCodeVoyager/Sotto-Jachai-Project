//src/modules/content/routes/contentRoute.js
const router = require("express").Router();

const authenticate = require("../../../middlewares/authMiddleware");
const contentController = require("../controllers/contentController");
const upload = require("../../../middlewares/multerMiddleware");
const authorize = require("../../../middlewares/rbacMiddleware");

router.use(authenticate);
router.post(
  "/",
  authorize(["submitContent"]),
  upload.array("content", 5),
  contentController.submitContent
);
router.get("/my-contents", contentController.getContentByLoggedInUser);

router.put(
  "/verify/:id",
  authorize(["verifyContent"]),
  contentController.verifyContent
);

router.get("/", authorize(["getContents"]), contentController.getContents);

router.delete(
  "/:id",
  authorize(["deleteContent"]),
  contentController.deleteContent
);

router.get("/:id", authorize(["getContent"]), contentController.getContent);

module.exports = router;
