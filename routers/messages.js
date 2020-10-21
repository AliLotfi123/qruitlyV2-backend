const { Router } = require("express");
const auth = require("../auth/middleware");
const Message = require("../models").message;

const router = new Router();

router.get("/", async (req, res) => {
  const message = await Message.findAll();

  console.log("dit is artwork", message);

  if (message === null) {
    return res.status(404).send({ message: "candidate not found" });
  }

  res.status(200).send({ message });
});

module.exports = router;
