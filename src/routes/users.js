// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/usersController');


/*** BUY PRODUCTS ***/ 
router.get('/login', productsController.login); 
router.get('/register', productsController.register); 


module.exports = router;