window.addEventListener('load', function(){
    document.querySelector('#deleteProduct').addEventListener('submit', function(e) {
        if (!window.confirm('¿Seguro quieres eliminar el producto?')) {
            e.preventDefault();
        }
    })
})