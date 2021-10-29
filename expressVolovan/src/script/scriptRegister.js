
window.addEventListener('load', function() {
    const validator = require('validator');
    document.querySelector("btnRegister").addEventListener('click', function(e){
        e.preventDefault();
        let errores = [];
        let name =document.querySelector('#name');
        let email =document.querySelector('#email');
        let password =document.querySelector('#password');
        let avatar =document.querySelector('#avatar');

        if(validator.isLength(name.value, {min:2})){
            errores.push("Debes escribir un nombre  no vacio con 2 o más letras")
        }

        if(validator.isEmail(email.value) ){
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

        if(errores.length > 0){
            let ulErrores = document.querySelector(".errores ul");
            errores.forEach(error => {
                ulErrores.innerHTML += <li class="logRegError" >${error}</li>;
            });
         }
         else{
            //ulErrores.innerHTML=""
            //document.querySelector("#formRegister").submit();
         }

    });
 });
 