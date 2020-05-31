const express = require('express');
const refreshToken = require('../controllers/refresh-token');

const router = express.Router();
router.use(express.json());

refreshToken(router);
module.exports = router;
