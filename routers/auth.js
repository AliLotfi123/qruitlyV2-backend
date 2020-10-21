const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const router = new Router();

const { runValidation } = require("../validators");
const { userSignupValidator } = require("../validators/auth/signup");
const { userSigninValidator } = require("../validators/auth/signin");

const { signup } = require("../controllers/auth/signup");
const { signin } = require("../controllers/auth/signin");
const { signedin } = require("../controllers/auth/signedin");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/me", authMiddleware, signedin);

module.exports = router;
