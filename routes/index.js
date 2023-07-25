const express = require('express');
const router = express.Router();

const Employee = require("./employee");

router.use("/employee", Employee);

module.exports = router;
