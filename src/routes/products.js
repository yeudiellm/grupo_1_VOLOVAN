// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** BUY PRODUCTS ***/ 
router.get('/productCart', productsController.productCart); 

router.get('/create', productsController.create); 



module.exports = router;
