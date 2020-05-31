const express = require('express');
const identify = require('../../controllers/identify');

const router = express.Router();
router.use(express.json());
identify(router);
module.exports = router;
