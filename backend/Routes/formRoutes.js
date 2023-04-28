const express = require("express");
const router = express.Router();

const {
  getForm,
  postForm,
  getFormById,
} = require("../Controller/formController");

router.get("/", getForm);

router.get("/:id", getFormById);

router.post("/", postForm);

module.exports = router;
