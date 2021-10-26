import React from "react";
import "../App.css";
import clocheImage from "../assets/images/cloche.png"
import wholeWheatBreadImage from "../assets/images/whole-wheat-bread.png"
import wholeWheatBread2Image from "../assets/images/whole-wheat-bread2.png"
import cupcakeImage from "../assets/images/cupcake.png"

function CategoriesPage(){
    return (
        <div>
            <div className="mainCategoriesSubtittle2"><h2>CATEGORÍAS DE PRODUCTOS</h2></div>
            <div className="CategoriesContainer2">
                <div className="chartCategories2">
                    <div className="categoriesItemImage2"><img className="categoriesImage2" src={wholeWheatBreadImage}/></div>
                    <div className="categoriesItem2"><h2 className="categoriesText2">VOLOVANES SALADOS</h2></div>
                    <div className="categoriesItem2"><h4 className="categoriesTextDescription2">8 productos</h4></div>                    
                </div>
                <div className="chartCategories2">
                    <div className="categoriesItemImage2"><img className="categoriesImage2" src={wholeWheatBread2Image}/></div>
                    <div className="categoriesItem2"><h2 className="categoriesText2">VOLOVANES DULCES</h2></div>
                    <div className="categoriesItem2"><h4 className="categoriesTextDescription2">10 productos</h4></div>                    
                </div>
                <div className="chartCategories2">
                    <div className="categoriesItemImage2"><img className="categoriesImage2" src={clocheImage}/></div>
                    <div className="categoriesItem2"><h2 className="categoriesText2">ESPECIALIDADES</h2></div>
                    <div className="categoriesItem2"><h4 className="categoriesTextDescription2">6 productos</h4></div>                    
                </div>
                <div className="chartCategories2">
                    <div className="categoriesItemImage2"><img className="categoriesImage2" src={cupcakeImage}/></div>
                    <div className="categoriesItem2"><h2 className="categoriesText2">POSTRES</h2></div>
                    <div className="categoriesItem2"><h4 className="categoriesTextDescription2">2 productos</h4></div>                    
                </div>
            </div>
        </div>

    );
}

export default CategoriesPage; 