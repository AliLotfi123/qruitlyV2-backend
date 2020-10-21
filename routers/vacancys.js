const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const router = new Router();

const { runValidation } = require("../validators");
const { getVacancyValidator } = require("../validators/vacancys/getVacancy");
const { postVacancyValidator } = require("../validators/vacancys/postVacancy");
const {
  deleteVacancyValidator,
} = require("../validators/vacancys/deleteVacancy");
const {
  updateVacancyValidator,
} = require("../validators/vacancys/updateVacancy");

const { getVacancys } = require("../controllers/vacancys/getVacancys");
const { postVacancy } = require("../controllers/vacancys/postVacancy");
const { deteleVacancy } = require("../controllers/vacancys/deleteVacancy");
const { updateVacancy } = require("../controllers/vacancys/updateVacancy");

router.get(
  "/",
  authMiddleware,
  getVacancyValidator,
  runValidation,
  getVacancys
);

router.post(
  "/post",
  authMiddleware,
  postVacancyValidator,
  runValidation,
  postVacancy
);

router.post(
  "/delete",
  authMiddleware,
  deleteVacancyValidator,
  runValidation,
  deteleVacancy
);

router.post(
  "/update",
  authMiddleware,
  updateVacancyValidator,
  runValidation,
  updateVacancy
);

module.exports = router;
