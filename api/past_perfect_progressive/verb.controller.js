const verbModel = require("./verb.model");

const getVerbs = async (req, res) => {
  const verbs = await verbModel.findAll();
  res.status(200).json(verbs);
};

module.exports = getVerbs;
