const express = require('express');
const router = express.Router();
const {getHomepage, ejs, postCreateUser, getCreatePage} = require('../controllers/homeController');

//khai báo route
router.get('/', getHomepage)

router.get('/ejs', ejs)

router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)

module.exports = router;