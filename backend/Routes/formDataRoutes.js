const express = require("express");
const router = express.Router();

const { postData } = require("../Controller/formDataController");

// router.get("/", getForm);

// router.get("/:id", getFormById);

router.post("/", postData);

module.exports = router;
