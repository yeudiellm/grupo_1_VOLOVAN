window.addEventListener('load', function() {
    alert("Probando");
    //const validator = require('validator');
    const formulario= document.querySelector("form");
    formulario.addEventListener('submit',function(event){
        event.preventDefault();
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
            event.preventDefault();
            let divErrores = document.querySelector("#errores");
            errors.forEach(error => {
                divErrores.innerText += "ERRORES"
            });
        }
        
        });


    });
 