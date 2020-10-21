const Candidate = require("../../models").candidate;

exports.deteleCandidate = async (req, res, next) => {
  try {
    const { id } = req.body;
    const candidate = await Candidate.findByPk(id);
    const deleted = candidate.destroy();

    res.send({ message: "Candidate Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
