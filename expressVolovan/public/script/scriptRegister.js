window.addEventListener('load', function() {
    //const validator = require('validator');
    document.querySelector("form").addEventListener('submit',function(e){
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        let errors=[]
        if(name.value==""){
            errors.push("Debe poner un nombre");
        }
    
        //if(!validator.isEmail(email.value)){
        //    errors.push("Debe poner un email valido");
        //}
        if(errors.length>0){
            e.preventDefault();
            let divErrores = document.querySelector("#errores");
            errors.forEach(error => {
                divErrores.innerText += "ERRORES"
            });
        }
        
        });


    });
 