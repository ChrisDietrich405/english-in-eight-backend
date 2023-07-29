const verbModel = require("./verb.model");

const getAll = async (req, res) => {
  const result = await verbModel.findAll();
  res.status(200).json(result);
};

module.exports = getAll;
