// ************ Require's ************--
const express = require('express');
const router = express.Router();
const path = require('path');
const upload =require('../config/multerUser');

const { body } = require('express-validator');
const usersController = require('../controllers/usersController');

// Middlewares
const guestMiddleware = require('../config/guestMiddleware');
const authMiddleware = require('../config/authMiddleware');
const registerValidation= require('../validations/registerValidation');
const editValidation = require('../validations/editValidation');
const loginValidation =  require('../validations/loginValidation');



// ************ Controller Require ************  // DEPRECATED
//const { request } = require('express');
//const { createRequire } = require('module');

/*** USERS CONTROL ***/ 
// Formulario registro Equivalente a crear usuario
router.get('/register', guestMiddleware, usersController.register);
// Procesar el registro
router.post('/register', upload.single('avatar'), registerValidation, usersController.processRegister); 

// Formulario login
router.get('/login', guestMiddleware,  usersController.login);
// Procesar el login
router.post('/login', loginValidation, usersController.processLogin);


//Editar Informacion 
router.get('/edit', authMiddleware, usersController.edit); 

// Procesar Edición
router.put('/edit', upload.single('avatar'), editValidation, usersController.processEdit);

// Perfil de usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);


module.exports = router;