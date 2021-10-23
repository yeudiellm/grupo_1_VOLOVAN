// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');

const { body } = require('express-validator');
const usersController = require('../controllers/usersController');

// Middlewares
const guestMiddleware = require('../config/guestMiddleware');
const authMiddleware = require('../config/authMiddleware');

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
    body('name')
        .notEmpty().withMessage('El nombre está vacío').bail()
        .isLength({min:2,max:undefined}).withMessage('Elige un nombre con minimo 2 caracteres'),
    body('email')
        .notEmpty().withMessage('El correo está vacío').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('La contraseña está vacía').bail()
        .isLength({min:8,max:undefined}).withMessage('Elige una contraseña con minimo 8 caracteres'),
    
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

const validationsLogin = [
    body('email')
        .notEmpty().withMessage('El correo está vacío').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('La contraseña está vacía'),
]

// ************ Controller Require ************  // DEPRECATED
//const { request } = require('express');
//const { createRequire } = require('module');

/*** USERS CONTROL ***/ 
// Formulario registro
router.get('/register', guestMiddleware, usersController.register);
// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister); 

// Formulario login
router.get('/login', guestMiddleware,  usersController.login);
// Procesar el login
router.post('/login', validationsLogin, usersController.processLogin);

// Perfil de usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);


module.exports = router;