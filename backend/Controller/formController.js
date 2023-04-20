const noticeSchema = require("../Models/formModel");

const getForm = async (req, res) => {
  const form = await noticeSchema.find({}).sort({ createdAt: -1 });
  res.status(200).json(form);
};

const postForm = async (req, res) => {
  const { userID, formName, formDes, fields } = req.body;
  try {
    const form = await noticeSchema.create({
      userID,
      formName,
      formDes,
      fields,
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getForm,
  postForm,
};
