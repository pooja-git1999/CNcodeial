const express = require('express');

const router = express.Router();
const postsApi = require("../../../controllers/api/v2/post1_api");
router.get('/', postsApi.index_1);
module.exports = router;