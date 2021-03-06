const bcrypt = require("bcrypt");
const { toJWT } = require("../../auth/jwt");
const User = require("../../models/").user;
const { SALT_ROUNDS } = require("../../config/constants");

exports.signup = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    company,
    isRecruiter,
  } = req.body;

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      firstName,
      lastName,
      company,
      isRecruiter,
    });

    delete newUser.dataValues["password"];

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
