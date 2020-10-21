const Candidate = require("../../models").candidate;

exports.updateCandidate = async (req, res, next) => {
  try {
    const {
      firstName,
      tags,
      price,
      salary,
      status,
      industry,
      hours,
      educationLevel,
      careerLevel,
      userId,
      id,
    } = req.body;

    const candidate = await Candidate.findByPk(id);

    const updateCandidate = await candidate.update({
      firstName,
      tags,
      price,
      salary,
      status,
      industry,
      hours,
      educationLevel,
      careerLevel,
      userId,
    });

    return res.status(200).send({ updateCandidate });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
