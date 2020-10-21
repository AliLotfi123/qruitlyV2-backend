const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const router = new Router();

const { runValidation } = require("../validators");
const { postMessageValidator } = require("../validators/messages/postMessage");
// const { userSigninValidator } = require("../validators/auth/signin");

const { postMessage } = require("../controllers/messages/postMessage");
// const { signin } = require("../controllers/auth/signin");
// const { signedin } = require("../controllers/auth/signedin");

router.post(
  "/post",
  authMiddleware,
  postMessageValidator,
  runValidation,
  postMessage
);
// router.post("/signin", userSigninValidator, runValidation, signin);
// router.get("/me", authMiddleware, signedin);

module.exports = router;
