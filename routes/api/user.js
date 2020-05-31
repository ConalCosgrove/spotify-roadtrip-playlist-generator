const express = require('express');
const userController = require('../../controllers/user');

const router = express.Router();
router.use(express.json());
userController(router);
module.exports = router;
