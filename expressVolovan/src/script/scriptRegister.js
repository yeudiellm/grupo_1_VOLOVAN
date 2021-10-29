const validator = require('validator');
window.addEventListener('load', function() {

    document.querySelector("btnRegister").addEventListener('click', function(e){
        e.preventDefault();
        let errores = [];
        let name =document.querySelector('#name');
        let email =document.querySelector('#email');
        let password =document.querySelector('#password');
        let avatar =document.querySelector('#avatar');

        if(name.value.length<2){
            errores.push("Debes escribir un nombre  no vacio con 2 o más letras")
        }

        if(email.value.length<1 || validator.isEmail(email.value) ){
            errores.push("Debes escribir un email válido")
        }

        if(password.value.length<8){
            errores.push("Debes escribir un nombre  no vacio con 2 o más letras")
        }

        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!allowedExtensions.exec(avatar.value)) {
            errores.push("Debes subir una imagen válida")
            fileInput.value = '';
        } 
        
    });
 });
 