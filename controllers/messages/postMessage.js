const Message = require("../../models").message;

exports.postMessage = async (req, res, next) => {
  try {
    const {
      subject,
      description,
      senderName,
      senderCompany,
      receiverName,
      receiverCompany,
      candidateName,
      VacancyName,
      candidateId,
      vacancyId,
    } = req.body;

    const sendMessage = await Message.create({
      subject,
      description,
      senderName,
      senderCompany,
      receiverName,
      receiverCompany,
      candidateName,
      VacancyName,
      candidateId,
      vacancyId,
    });

    return res.status(200).send({ sendMessage });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
};
