import React, { useState, useEffect} from "react";
import "../App.css";
import clocheImage from "../assets/images/cloche.png"
import wholeWheatBreadImage from "../assets/images/whole-wheat-bread.png"
import wholeWheatBread2Image from "../assets/images/whole-wheat-bread2.png"
import cupcakeImage from "../assets/images/cupcake.png"

function Categories(){

    const [countByCategory, setCountByCategory] = useState([])

    useEffect(()=> {
        // console.log('Se montó el componente');
        fetch('http://localhost:3000/api/products/')
            .then(response => response.json())
            .then(data => {
                console.log(data.countByCategory);
                setCountByCategory(data.countByCategory)
            })
            .catch(error => console.error(error));
    }, [])


    return (
        <div>
            <div className="mainCategoriesSubtittle"><h2>CATEGORÍAS DE PRODUCTOS</h2></div>
            <div className="CategoriesContainer">
                <div className="chartCategories">
                    <div className="categoriesItemImage"><img className="categoriesImage" src={wholeWheatBreadImage}/></div>
                    <div className="categoriesItem"><h2 className="categoriesText">VOLOVANES SALADOS</h2></div>
                    <div className="categoriesItem"><h4 className="categoriesTextDescription">{countByCategory.salados.totalProducts} productos</h4></div>                    
                </div>
                <div className="chartCategories">
                    <div className="categoriesItemImage"><img className="categoriesImage" src={wholeWheatBread2Image}/></div>
                    <div className="categoriesItem"><h2 className="categoriesText">VOLOVANES DULCES</h2></div>
                    <div className="categoriesItem"><h4 className="categoriesTextDescription">{countByCategory.dulces.totalProducts} productos</h4></div>                    
                </div>
                <div className="chartCategories">
                    <div className="categoriesItemImage"><img className="categoriesImage" src={clocheImage}/></div>
                    <div className="categoriesItem"><h2 className="categoriesText">ESPECIALIDADES</h2></div>
                    <div className="categoriesItem"><h4 className="categoriesTextDescription">{countByCategory.especialidades.totalProducts} productos</h4></div>                    
                </div>
                <div className="chartCategories">
                    <div className="categoriesItemImage"><img className="categoriesImage" src={cupcakeImage}/></div>
                    <div className="categoriesItem"><h2 className="categoriesText">POSTRES</h2></div>
                    <div className="categoriesItem"><h4 className="categoriesTextDescription">{countByCategory.postres.totalProducts} productos</h4></div>                    
                </div>
            </div>
            <div><hr className="line2"/></div>
        </div>

    );
}

export default Categories; 