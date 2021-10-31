const path = require('path');
const { body } = require('express-validator');

const loginValidation = [
    body('email')
        .notEmpty().withMessage('El correo está vacío.').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido.'),
    body('password').notEmpty().withMessage('La contraseña está vacía.'),
]

module.exports = loginValidation;