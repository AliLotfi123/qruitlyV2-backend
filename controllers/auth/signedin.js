exports.signedin = async (req, res) => {
  delete req.user.dataValues["password"];
  console.log(req.user.dataValues);
  res.status(200).send({ ...req.user.dataValues });
};
