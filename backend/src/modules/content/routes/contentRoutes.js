const router = require("express").Router();

const upload = require("../../../middlewares/multerMiddleware");
const authorize = require("../../../middlewares/rbacMiddleware");
const authenticate = require("../../../middlewares/authMiddleware");
const validate = require("../../../middlewares/validatorMiddleware");
const contentController = require("../controllers/contentController");
const contentValidation = require("../validations/contentValidation");

//Authenticate Middleware
router.use(authenticate);

//Content Routes
router.get("/", authorize(["getContents"]), contentController.getContents);
router.get("/my-contents", contentController.getContentByLoggedInUser);
router.get("/:id", authorize(["getContent"]), contentController.getContent);

router.post(
  "/",
  authorize(["submitContent"]),
  validate(contentValidation.CreateContent),
  upload.array("content", 5),
  contentController.submitContent
);
router.put(
  "/verify/:id",
  authorize(["verifyContent"]),
  validate(contentValidation.verifyContent),
  contentController.verifyContent
);

router.delete(
  "/:id",
  authorize(["deleteContent"]),
  contentController.deleteContent
);

module.exports = router;
