window.addEventListener('load', function () {
    let errores = 0;
    let product_name = document.querySelector("#product_name");
    let product_price= document.querySelector("#product_price");
    let product_description= document.querySelector("#product_description");
    let product_category= document.querySelector("#category");

    let product_name_error= document.querySelector("#product_name_error");
    let product_price_error= document.querySelector("#product_price_error");
    let product_description_error= document.querySelector("#product_description_error");
    let product_category_error= document.querySelector("#category_error");


    product_name.addEventListener("blur", function () {
        errores = 0;
        product_name_error.innerHTML = "";
        if ( product_name.value.length<5) {
            errores = errores + 1;
            product_name.style.borderColor = "red";
            product_name_error.innerHTML += "Debes escribir un nombre con más de 5 letras";
        }
        else {
            product_name.style.borderColor = "green";
        }
    });


    
    product_price.addEventListener("blur", function () {
        errores = 0;
        product_price_error.innerHTML = "";
        if ( product_price.value<=0) {
            errores = errores + 1;
            product_price.style.borderColor = "red";
            product_price_error.innerHTML += "Debes escribir un precio positivo";
        }
        else {
            product_price.style.borderColor = "green";
        }
    });

    product_description.addEventListener("blur", function () {
        errores = 0;
        product_description_error.innerHTML = "";
        if ( product_description.value.length<20) {
            errores = errores + 1;
            product_description.style.borderColor = "red";
            product_description_error.innerHTML += "Debes escribir una descripción con más de 20 letras";
        }
        else {
            product_description.style.borderColor = "green";
        }
    });

    product_category.addEventListener("blur", function () {
        errores = 0;
        product_category_error.innerHTML = "";
        if ( !product_category.value) {
            errores = errores + 1;
            product_category.style.borderColor = "red";
            product_category_error.innerHTML += "Debes selecionar una categoría";
        }
        else {
            product_category.style.borderColor = "green";
        }
    });




    document.querySelector("form").addEventListener('submit', function (e) {
        if (errores > 0) {
            e.preventDefault();
        };
    });


});
