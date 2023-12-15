const express = require('express');
const router = express.Router();
const {getHomepage, ejs, createUser} = require('../controllers/homeController');

//khai báo route
router.get('/', getHomepage)

router.get('/ejs', ejs)

router.post('/create-user', createUser)

module.exports = router;