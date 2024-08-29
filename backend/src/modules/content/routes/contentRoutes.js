//src/modules/content/routes/contentRoute.js
const router = require("express").Router();

const authenticate = require("../../../middlewares/authMiddleware");
const contentController = require("../controllers/contentController");
const upload = require("../../../middlewares/multerMiddleware");

router.use(authenticate);
router.post("/", upload.array("content", 5), contentController.submitContent);
router.get("/my-contents", contentController.getContentByLoggedInUser);

router.put("/verify/:id", contentController.verifyContent);

router.get("/", contentController.getContents);

router.delete("/:id", contentController.deleteContent);

router.get("/:id", contentController.getContent);


module.exports = router;
