const verbModel = require("./verb.model");

const getAll = async (req, res) => {
  const results = await verbModel.findAll();
  res.status(200).json({ message: results });
};

module.exports = getAll;
