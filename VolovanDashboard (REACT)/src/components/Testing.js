import React, { useState, useEffect } from 'react'


function Testing(){
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        console.log('Se montó el componente');
        fetch('http://localhost:3000/api/products/')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setProducts(data.products)
            })
            .catch(error => console.error(error));
    }, [])

    return (
        <div>
            <h1>Commponente de prueba</h1>
            
            { 
                products.length === 0 && <p>Loading...</p>
            }
            {
                products.map((product, i) => {
                    return (
                        <h3>{product.name}</h3>
                    )
                })
            }

        </div>
    )
}

export default Testing;