const Candidate = require("../../models").candidate;

exports.getCandidates = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const myCandidates = await Candidate.findAll({
      where: { userId },
    });

    return res.status(200).send({ myCandidates });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
