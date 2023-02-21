const express = require('express');

const router = express.Router();
router.use('/posts_1',require('./posts_1'));

module.exports = router;