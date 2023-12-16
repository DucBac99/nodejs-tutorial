const express = require('express');
const router = express.Router();
const {getHomepage, ejs, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser} = require('../controllers/homeController');

//khai báo route
router.get('/', getHomepage)

router.get('/ejs', ejs)

router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)

router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser)

module.exports = router;