const express = require('express');
const router = express.Router();

const { getWelcome } = require('../Controllers/index.controller');

router.get('/', getWelcome);

module.exports = router;
