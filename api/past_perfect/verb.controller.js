const verbModel = require("./verb.model");

const getVerbs = async (req, res) => {
  const results = await verbModel.findAll();
  res.status(200).json(results);
};

module.exports = getVerbs;
