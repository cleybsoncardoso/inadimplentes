const express = require('express');

const router = express.Router();

router.use('/client', require('./modules/client'));

module.exports = router;