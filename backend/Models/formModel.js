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
    text: {
      type: String,
    },
    number: {
      type: Number,
    },
    checkbox: {
      type: Boolean,
    },
    // file: {
    //   type: File,
    // },
    radio: {
      type: Boolean,
    },
    date: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FORM", formSchema);
