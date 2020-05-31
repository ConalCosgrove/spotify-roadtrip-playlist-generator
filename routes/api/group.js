const express = require('express');
const groupController = require('../../controllers/group');

const router = express.Router();
router.use(express.json());
groupController(router);
module.exports = router;
