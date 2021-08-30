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
// ************ Controller Require ************
const usersController = require('../controllers/usersController');


/*** USERS CONTROL ***/ 
// Formulario login
router.get('/login', usersController.login);

// Formulario registro
router.get('/register', usersController.register); 
// Procesar el registro
router.post('/register', uploadFile.single('avatar'), usersController.processRegister); 

module.exports = router;