//src/modules/content/routes/contentRoute.js
const router = require("express").Router();

const authenticate = require("../../../middlewares/authMiddleware");
const contentController = require("../controllers/contentController");
const upload = require("../../../middlewares/multerMiddleware");
const authorize = require("../../../middlewares/rbacMiddleware");

router.use(authenticate);
router.get("/", authorize(["getContents"]), contentController.getContents);
router.get("/my-contents", contentController.getContentByLoggedInUser);
router.get("/:id", authorize(["getContent"]), contentController.getContent);

router.post(
  "/",
  authorize(["submitContent"]),
  upload.array("content", 5),
  contentController.submitContent
);
router.put(
  "/verify/:id",
  authorize(["verifyContent"]),
  contentController.verifyContent
);


router.delete(
  "/:id",
  authorize(["deleteContent"]),
  contentController.deleteContent
);


module.exports = router;
