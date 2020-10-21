const Message = require("../../models").message;

exports.receivedMessages = async (req, res, next) => {
  try {
    const { receiverCompany } = req.body;

    const myMessages = await Message.findAll({
      where: { receiverCompany },
    });

    return res.status(200).send({ myMessages });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
