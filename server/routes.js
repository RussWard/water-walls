const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/findLargestWell', controller.findLargestWell)

module.exports = router;