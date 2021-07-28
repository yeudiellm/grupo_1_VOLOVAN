// ************ Require's ************
const path = require('path'); 
const publicPath = path.resolve(__dirname, "../public" ); 
const express = require('express');
const createError = require('http-errors');
// ************ express() ************
const app = express();

// ************ Middlewares ************
app.use(express.static(publicPath));// Necesario para los archivos estáticos en el folder /public


// ************ Template Engine  ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));// Define la ubicación de la carpeta de las Vistas

// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products
const usersRouter = require('./routes/users');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter); 
//app.use('/productDesign',  productsRouter);

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ exports app ************
module.exports = app;

/*
app.get('/', (req, res)=> {
    res.render('index');
});

app.get('/login', (req, res)=> { 
    res.render('login');
}  );

app.get('/register', (req, res)=> { 
    res.render('register');
}  );

app.get('/productDesign', (req, res)=> { 
    res.render('productDesign');
}  );

app.get('/productCart', (req, res)=> { 
    res.render('productCart');
}  );

app.get('/productDetail', (req, res)=> { 
    res.render('productDetail');
} );*/

//app.listen(3000, ()=>console.log("Servidor corriendo en 3000"));
