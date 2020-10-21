const Vacancy = require("../../models").vacancy;

exports.updateVacancy = async (req, res, next) => {
  try {
    const {
      vacancyName,
      tags,
      price,
      salary,
      description,
      status,
      industry,
      hours,
      educationLevel,
      careerLevel,
      userId,
      id,
    } = req.body;

    const vacancy = await Vacancy.findByPk(id);

    const updateVacancy = await vacancy.update({
      vacancyName,
      tags,
      price,
      salary,
      description,
      status,
      industry,
      hours,
      educationLevel,
      careerLevel,
      userId,
    });

    return res.status(200).send({ updateVacancy });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
