const Vacancy = require("../../models").vacancy;

exports.getVacancys = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const myVacancys = await Vacancy.findAll({
      where: { userId },
    });

    return res.status(200).send({ myVacancys });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
