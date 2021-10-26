// ************ Require's ************
const express = require('express');
const router = express.Router();
const upload =require('../config/multer');

const path = require('path')
const { body } = require('express-validator')

//**** Validaciones express-validator
const validations = [
    body('product_name')
        .notEmpty().withMessage('Ingresa un nombre.').bail()
        .isLength({min:5,max:undefined}).withMessage('El nombre debe tener minimo 5 caracteres.'),
    body('product_price')
        .notEmpty().withMessage('Ingresa un precio.').bail()
        .isNumeric('El precio debe ser numérico.'),
    body('product_description')
        .notEmpty().withMessage('Ingresa una descripción.').bail()
        .isLength({min:20,max:undefined}).withMessage('Añade una descripción de minimo 20 caracteres.'),
    body('category').notEmpty().withMessage('Selecciona una categoria.'),
    body('productImage').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if(!file){
            throw new Error('Tienes que subir una imagen.');
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Los tipos de imagen permitidos son: ${acceptedExtensions.join(', ')}.`);
            }
        }
        return true;
    })
]

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** Lista de Productos  ***/ 
router.get('/', productsController.index); 

/*** Detalle de Producto  ***/ 
router.get('/detail/:id', productsController.detail);

/*** Carrito de Compra de Productos ***/ 
router.get('/productCart', productsController.productCart); 

/*** Crear un producto  ***/ 
router.get('/create', productsController.create);

/*** Crear un producto  (Acción) ***/ 
router.post('/create', upload.single('productImage'), validations, productsController.build); 

/*** Edición de Productos ***/ 
router.get('/edit/:id', productsController.edit);

/*** Edición de Productos (Acción) ***/ 
router.put('/edit/:id', upload.single('productImage'), validations, productsController.update);


/*** Eliminación de Producto (Acción) ***/ 
router.delete('/delete/:id', productsController.delete);







module.exports = router;
