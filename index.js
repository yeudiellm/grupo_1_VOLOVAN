const express = require('express');
const path = require('path');  

const app = express(); 

const publicPath = path.resolve(__dirname, "./public" ); 

app.set('view engine', 'ejs');

app.use(express.static(publicPath));

app.get('/', (req, res)=> {
    res.render('index');
});

app.get('/login', (req, res)=> { 
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
}  );

app.get('/register', (req, res)=> { 
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
}  );

app.get('/productCart', (req, res)=> { 
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'));
}  );

app.get('/productDetail', (req, res)=> { 
    res.render('productDetail');
} );

app.listen(3000, ()=>console.log("Servidor corriendo en 3000"));
