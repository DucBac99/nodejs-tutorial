const express = require('express');
const router = express.Router();
const {getHomepage, ejs} = require('../controllers/homeController');

//khai báo route
router.get('/', getHomepage)

router.get('/ejs', ejs)

module.exports = router;