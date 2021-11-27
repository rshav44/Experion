const express = require('express');
const router = express.Router();
const gigRoutes = require('./travel.route');

router.use('/travels', gigRoutes);
module.exports = router;

