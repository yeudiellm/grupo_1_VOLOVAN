// ************ Require's ************
const path = require('path'); 
const publicPath = path.resolve(__dirname, "../public" ); 
const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const createError = require('http-errors');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const userLoggedMiddleware = require('.//config/userLoggedMiddleware');
// ************ express() ************
const app = express();
app.use(express.urlencoded({extended: false}));
// ************ Middlewares ************
app.use(express.static(publicPath));// Necesario para los archivos estáticos en el folder /public
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({
    secret: "Shh, just to session work",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);
// ************ Template Engine  ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));// Define la ubicación de la carpeta de las Vistas

// ************ Route System require and use() ************
const mainRoutes = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products
const userRoutes = require('./routes/userRoutes');
const { createRequire } = require('module');

app.use('/', mainRoutes);
app.use('/products', productsRouter);
app.use('/users', userRoutes); 
//app.use('/productDesign',  productsRouter);

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ exports app ************
module.exports = app;