import React, { useState, useEffect } from "react";
import breadImage from "../assets/images/bread.png"
import clocheImage from "../assets/images/cloche.png"
import wholeWheatBreadImage from "../assets/images/whole-wheat-bread.png"
import wholeWheatBread2Image from "../assets/images/whole-wheat-bread2.png"
import cupcakeImage from "../assets/images/cupcake.png"

function ProductsList(){

    const [products, setProducts] = useState([]);
    let myHref;


    useEffect(()=> {
        fetch('http://localhost:3000/api/products/')
            .then(response => response.json())
            .then(data => {
                // console.log(data.products);
                setProducts(data.products)
            })
            .catch(error => console.error(error));
    }, [])


    return (
        <div>
            <div className="productLisTitle"><h2>LISTA DE PRODUCTOS</h2></div>
            
            <div className="productContainer">
            { 
                products.length === 0 && <p>Loading...</p>
            }
            { 
                products.map((product, i) =>{
                    return (
                        <>
                        <a href={"http://localhost:3000/"+product.details} target="_blank">
                        <div className="productItem">
                        <div className="productContainerItem"><img className="productItemImage" src={clocheImage}></img></div>
                        <div className="productContainerItem"><h2 className="itemName">{product.name}</h2></div>
                        </div>
                        </a>
                        </>
                    )
                })
                        
            }
            </div>
            </div>

    );
}

export default ProductsList; 