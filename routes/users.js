const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');

console.log('router loaded');


router.get('/profile', userController.profile);


module.exports = router;