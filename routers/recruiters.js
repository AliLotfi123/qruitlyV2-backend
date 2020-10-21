const { Router } = require("express");
const auth = require("../auth/middleware");
const Candidate = require("../models").candidate;
const Message = require("../models").message;

const router = new Router();

router.get("/", async (req, res) => {
  const candidate = await Candidate.findAll({
    include: [Message],
  });

  console.log("These are the candidates", candidate);

  if (candidate === null) {
    return res.status(404).send({ message: "candidate not found" });
  }

  res.status(200).send({ candidate });
});

// router.post("/addcandidate", auth, async (req, res) => {
//   const {
//     candidateName,
//     tags,
//     price,
//     salary,
//     description,
//     status,
//     industry,
//     hours,
//     educationLevel,
//     careerLevel,
//   } = req.body;
//   const user = req.user;
//   try {
//     const newPage = await Artwork.create({
//       candidateName,
//       tags,
//       price,
//       salary,
//       description,
//       status,
//       industry,
//       hours,
//       educationLevel,
//       careerLevel,
//       userId: user.id,
//     });
//     return res.status(200).send({ newPage });
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;

//   console.log(id);
//   if (isNaN(parseInt(id))) {
//     return res.status(400).send({ message: "candidate id is not a number" });
//   }

//   const Candidate = await Candidate.findByPk(id, {
//     include: [Message],
//   });

//   console.log("dit is artwork", artwork);

//   if (Candidate === null) {
//     return res.status(404).send({ message: "candidate not found" });
//   }

//   res.status(200).send({ message: "ok", Candidate });
// });

// router.delete("/:candidateId/:messageId", auth, async (req, res) => {
//   const messageId = req.params.messageId;
//   const candidateId = req.params.candidateId;
//   try {
//     const messageId = await message.findByPk(id);
//     const deleted = message.destroy();
//     const Candidate = await Candidate.findByPk(candidateId, {
//       include: [Message],
//     });
//     res.send(Candidate);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.post("/:id/bids", auth, async (req, res) => {
//   const artwork = await Artwork.findByPk(req.params.id);
//   console.log("dit is Artwork", Artwork);

//   if (artwork === null) {
//     return res.status(404).send({ message: "This homepage does not exist" });
//   }

//   if (!artwork.userId === req.user.id) {
//     return res
//       .status(403)
//       .send({ message: "You are not authorized to update this homepage" });
//   }

//   const { email, amount, artworkId } = req.body;

//   if (!email) {
//     return res.status(400).send({ message: "A story must have a email" });
//   }
//   try {
//     const bid = await Bid.create({
//       email,
//       amount,
//       artworkId: artwork.id,
//     });

//     return res.status(201).send({ message: "Bid created", bid });
//   } catch (e) {
//     console.log(e);
//   }
// });

// router.get("/", async (req, res) => {
//   const limit = req.query.limit || 10;
//   const offset = req.query.offset || 0;
//   const artworks = await Artwork.findAndCountAll({
//     limit,
//     offset,
//     include: [Bid],
//     order: [[Bid, "createdAt", "DESC"]],
//   });
//   console.log("dit is bid", Bid);
//   console.log("dit is de log", artworks.rows);
//   res.status(200).send({ message: "ok", artworks });
// });

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;

//   console.log(id);
//   if (isNaN(parseInt(id))) {
//     return res.status(400).send({ message: "Homepage id is not a number" });
//   }

//   const artwork = await Artwork.findByPk(id, {
//     include: [Bid],
//   });

//   console.log("dit is artwork", artwork);

//   if (artwork === null) {
//     return res.status(404).send({ message: "Homepage not found" });
//   }

//   res.status(200).send({ message: "ok", artwork });
// });

// router.patch("/:id", async (req, res) => {
//   const { id } = req.params;
//   const artwork = await Artwork.findByPk(parseInt(id));
//   const updatedHearts = await artwork.increment({
//     hearts: 1,
//   });

//   return res.status(200).send(updatedHearts);
// });

module.exports = router;
