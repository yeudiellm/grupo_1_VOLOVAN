import React from "react";
import breadImage from "../assets/images/bread.png"
import clocheImage from "../assets/images/cloche.png"
import wholeWheatBreadImage from "../assets/images/whole-wheat-bread.png"
import wholeWheatBread2Image from "../assets/images/whole-wheat-bread2.png"
import cupcakeImage from "../assets/images/cupcake.png"

function ProductsList(){
    return (
        <div>
            <div className="productLisTitle"><h2>LISTA DE PRODUCTOS</h2></div>
            
            <div className="productContainer">
                <div className="productItem">
                    <div className="productContainerItem"><img className="productItemImage" src={clocheImage}></img></div>
                    <div className="productContainerItem"><h2 className="itemName">Megavolo</h2></div>
                </div>
                <div className="productItem">
                    <div className="productContainerItem"><img className="productItemImage" src={clocheImage}></img></div>
                    <div className="productContainerItem"><h2 className="itemName">Paseados</h2></div>
                </div>



            </div>
            </div>

    );
}

export default ProductsList; 