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
                console.log(data.products);
                setProducts(data.products)
            })
            .catch(error => console.error(error));
    }, [])


    return (
        <div>
            <div className="productLisTitle2"><h2>LISTA DE PRODUCTOS</h2></div>
            
            <div className="productContainer2">
            { 
                products.length === 0 && <p>Loading...</p>
            }
            { 
                products.map((product, i) =>{
                    return (
                        <>
                        <a href={"http://localhost:3000/"+product.details} target="_blank">
                        <div className="productItem2">
                        <div className="productContainerItem2"><img className="productItemImage2" src={clocheImage}></img></div>
                        <div className="productContainerItem2"><h2 className="itemName2">{product.name}</h2></div>
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