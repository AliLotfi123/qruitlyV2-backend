const Vacancy = require("../../models").candidate;

exports.postVacancy = async (req, res, next) => {
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
    } = req.body;

    const createVacancy = await Vacancy.create({
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

    return res.status(200).send({ createVacancy });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
