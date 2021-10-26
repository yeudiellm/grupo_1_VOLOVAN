import React from "react";
import "../App.css";
import clocheImage from "../assets/images/cloche.png"
import wholeWheatBreadImage from "../assets/images/whole-wheat-bread.png"
import wholeWheatBread2Image from "../assets/images/whole-wheat-bread2.png"
import cupcakeImage from "../assets/images/cupcake.png"

function Categories(){
    return (
        <div>
            <div className="mainCategoriesSubtittle"><h2>CATEGORÍAS DE PRODUCTOS</h2></div>
            <div className="CategoriesContainer">
                <div className="chartCategories">
                    <div className="categoriesItemImage"><img className="categoriesImage" src={wholeWheatBreadImage}/></div>
                    <div className="categoriesItem"><h2 className="categoriesText">VOLOVANES SALADOS</h2></div>
                    <div className="categoriesItem"><h4 className="categoriesTextDescription">8 productos</h4></div>                    
                </div>
                <div className="chartCategories">
                    <div className="categoriesItemImage"><img className="categoriesImage" src={wholeWheatBread2Image}/></div>
                    <div className="categoriesItem"><h2 className="categoriesText">VOLOVANES DULCES</h2></div>
                    <div className="categoriesItem"><h4 className="categoriesTextDescription">10 productos</h4></div>                    
                </div>
                <div className="chartCategories">
                    <div className="categoriesItemImage"><img className="categoriesImage" src={clocheImage}/></div>
                    <div className="categoriesItem"><h2 className="categoriesText">ESPECIALIDADES</h2></div>
                    <div className="categoriesItem"><h4 className="categoriesTextDescription">6 productos</h4></div>                    
                </div>
                <div className="chartCategories">
                    <div className="categoriesItemImage"><img className="categoriesImage" src={cupcakeImage}/></div>
                    <div className="categoriesItem"><h2 className="categoriesText">POSTRES</h2></div>
                    <div className="categoriesItem"><h4 className="categoriesTextDescription">2 productos</h4></div>                    
                </div>
            </div>
            <div><hr className="line2"/></div>
        </div>

    );
}

export default Categories; 