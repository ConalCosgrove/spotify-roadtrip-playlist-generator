const userController = require('../controllers/user');
const express = require('express');
let router = express.Router();
router.use(express.json());
userController(router);
module.exports =  router;

