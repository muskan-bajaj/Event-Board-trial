const express = require("express");
const router = express.Router();

const { getForm, postForm } = require("../Controller/formController");

router.get("/", getForm);

router.post("/", postForm);

module.exports = router;
