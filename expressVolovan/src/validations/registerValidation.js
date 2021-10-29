const { body } = require('express-validator');

const registerValidation=[
    body('name')
        .notEmpty().withMessage('El nombre está vacío.').bail()
        .isLength({min:2,max:undefined}).withMessage('Elige un nombre con minimo 2 caracteres.'),
    body('email')
        .notEmpty().withMessage('El correo está vacío.').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido.'),
    body('password').notEmpty().withMessage('La contraseña está vacía.').bail()
        .isLength({min:8,max:undefined}).withMessage('Elige una contraseña con minimo 8 caracteres.'),
    
    body('avatar').custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error ('Tienes que subir una imagen.');
        } else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error (`Solo se admiten formatos: ${acceptedExtensions.join(', ')}`);
            }
        }
        
        return true;
    })
];

module.exports = registerValidation;