const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const router = new Router();

const { runValidation } = require("../validators");
const {
  getCandidateValidator,
} = require("../validators/candidates/getCandidate");
const {
  postCandidateValidator,
} = require("../validators/candidates/postCandidate");
const {
  deleteCandidateValidator,
} = require("../validators/candidates/deleteCandidate");
const {
  updateCandidateValidator,
} = require("../validators/candidates/updateCandidate");

const { getCandidates } = require("../controllers/candidates/getCandidates");
const { postCandidate } = require("../controllers/candidates/postCandidate");
const {
  deteleCandidate,
} = require("../controllers/candidates/deleteCandidate");
const {
  updateCandidate,
} = require("../controllers/candidates/updateCandidate");

router.get(
  "/",
  authMiddleware,
  getCandidateValidator,
  runValidation,
  getCandidates
);

router.post(
  "/post",
  authMiddleware,
  postCandidateValidator,
  runValidation,
  postCandidate
);

router.post(
  "/delete",
  authMiddleware,
  deleteCandidateValidator,
  runValidation,
  deteleCandidate
);

router.post(
  "/update",
  authMiddleware,
  updateCandidateValidator,
  runValidation,
  updateCandidate
);

module.exports = router;
