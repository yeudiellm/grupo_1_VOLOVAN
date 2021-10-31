const path = require('path');
const { body } = require('express-validator');


const CreateValidation = [
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
];


module.exports = CreateValidation;