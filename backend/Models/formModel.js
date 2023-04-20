const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    formName: {
      type: String,
      required: true,
    },
    formDes: {
      type: String,
      required: true,
    },
    fields: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FORM", formSchema);
