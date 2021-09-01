// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');

const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars')
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer({storage});

const validations = [
    body('name').notEmpty().withMessage('El nombre está vacío'),
    body('email')
        .notEmpty().withMessage('El correo está vacío').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('La contraseña está vacía'),
    // body('repeatPassword').notEmpty().withMessage('Repite la contraseña'),
    body('avatar').custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error ('Tienes que subir una imagen');
        } else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error (`Solo se admiten formatos: ${acceptedExtensions.join(', ')}`);
            }
        }
        
        return true;
    })
]

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

/*** USERS CONTROL ***/ 
// Formulario login
router.get('/login', usersController.login);

// Formulario registro
router.get('/register', usersController.register);
// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister); 

module.exports = router;