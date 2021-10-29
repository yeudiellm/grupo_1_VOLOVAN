// ************ Require's ************
const path = require('path');
const publicPath = path.resolve(__dirname, "../public");
const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const createError = require('http-errors');
const userLoggedMiddleware = require('.//config/userLoggedMiddleware');
// ************ express() ************
const mainRoutes = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/productsRoutes'); // Rutas /products
const userRoutes = require('./routes/userRoutes');
const apiRoutes = require('./routes/apiRoutes');
const { createRequire } = require('module');

const app = express();
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
// ************ Template Engine  ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));// Define la ubicación de la carpeta de las Vistas


app.use(express.static(publicPath));// Necesario para los archivos estáticos en el folder /public

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
// ************ Middlewares ************
app.use(session({
    secret: "Shh, just to session work",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);

// ************ Route System require and use() ************
app.use('/', mainRoutes);
app.use('/products', productsRouter);
app.use('/users', userRoutes);
app.use('/api', apiRoutes);

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ exports app ************
module.exports = app;