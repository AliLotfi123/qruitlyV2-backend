const Vacancy = require("../../models").vacancy;

exports.deteleVacancy = async (req, res, next) => {
  try {
    const { id } = req.body;
    const vacancy = await Vacancy.findByPk(id);
    const deleted = vacancy.destroy();

    res.send({ message: "Vacancy Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
