const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const router = new Router();

const { runValidation } = require("../validators");
const { postMessageValidator } = require("../validators/messages/postMessage");
const {
  receivedMessagesValidator,
} = require("../validators/messages/receivedMessages");

const { postMessage } = require("../controllers/messages/postMessage");
const {
  receivedMessages,
} = require("../controllers/messages/receivedMessages");

router.post(
  "/post",
  authMiddleware,
  postMessageValidator,
  runValidation,
  postMessage
);
router.get(
  "/received",
  authMiddleware,
  receivedMessagesValidator,
  runValidation,
  receivedMessages
);

module.exports = router;
