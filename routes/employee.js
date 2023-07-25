const express = require('express');
/* const { decoToken, verifyJwt } = require('../middlewares/auth'); */
const router = express.Router();
const { addEmployee } = require('../controllers/Employee');

/* router.get("/",getUserData); */
router.post('/addEmployee', addEmployee);

module.exports = router;
