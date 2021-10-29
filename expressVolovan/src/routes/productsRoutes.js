// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const upload =require('../config/multerProduct');
const { body } = require('express-validator');

const adminMiddleware = require('../config/adminMiddleware');

//**** Validaciones express-validator
const SearchValidation= require('../validations/searchValidation');
const CreateValidation= require('../validations/createValidation');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** Lista de Productos  ***/ 
router.get('/', productsController.index); 

/*** Detalle de Producto  ***/ 
router.get('/detail/:id', productsController.detail);

/*** Carrito de Compra de Productos ***/ 
router.get('/productCart', productsController.productCart); 

/*** Crear un producto  ***/ 
router.get('/create',adminMiddleware, productsController.create);

/*** Crear un producto  (Acción) ***/ 
router.post('/create', upload.single('productImage'), CreateValidation, productsController.build); 

/*** Edición de Productos ***/ 
router.get('/edit/:id',adminMiddleware, productsController.edit);

/*** Edición de Productos (Acción) ***/ 
router.put('/edit/:id', upload.single('productImage'), CreateValidation, productsController.update);

/*** Búsqueda de Producto (Acción) ***/ 
router.post('/search', SearchValidation ,productsController.search);

/*** Eliminación de Producto (Acción) ***/ 
router.delete('/delete/:id',adminMiddleware, productsController.delete);



module.exports = router;
