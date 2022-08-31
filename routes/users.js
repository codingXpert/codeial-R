const express = require('express');
const router = express.Router();

const userControlller = require('../controller/users_controller');

router.get('/profile' , userControlller.profile);

module.exports = router;