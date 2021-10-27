const express = require('express');
const router = express.Router();
const path = require('path')

const apiController = require('../controllers/apiController');

/* API de usuarios */
router.get('/users', apiController.users);
router.get('/users/:id', apiController.userDetail);

/* API de productos */
router.get('/products', apiController.products);
router.get('/products/:id', apiController.productDetail);

module.exports = router;