const groupController = require('../controllers/group')
const express = require('express');
let router = express.Router();
router.use(express.json())
groupController(router)
module.exports =  router;

