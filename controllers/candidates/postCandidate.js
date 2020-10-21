const Candidate = require("../../models").candidate;

exports.postCandidate = async (req, res, next) => {
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
    } = req.body;

    const createCandidate = await Candidate.create({
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

    return res.status(200).send({ createCandidate });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
