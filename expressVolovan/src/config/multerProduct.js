const multer =require('multer'); 
const fs = require('fs'); 


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'public/images/products');
    },
    filename: function(req,file, cb){
        cb(null, 'volovan-'+file.originalname)
    }
}); 

const upload = multer({storage:storage});

module.exports =upload; 