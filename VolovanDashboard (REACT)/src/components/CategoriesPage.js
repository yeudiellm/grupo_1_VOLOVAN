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
                setCountByCategory(data.countByCategory)
            })
            .catch(error => console.error(error));
    }, [])


    return (

        
        <div>

            { 
                countByCategory.length === 0 && <p>Loading...</p>
            }
            { 
                Object.keys(countByCategory).length > 0 && <><div className="mainCategoriesSubtittle2"><h2>CATEGORÍAS DE PRODUCTOS</h2></div>
            <div className="CategoriesContainer2">
                <div className="chartCategories2">
                    <div className="categoriesItemImage2"><img className="categoriesImage2" src={wholeWheatBreadImage}/></div>
                    <div className="categoriesItem2"><h2 className="categoriesText2">VOLOVANES SALADOS</h2></div>
                    <div className="categoriesItem2"><h4 className="categoriesTextDescription2">{countByCategory[0].countPerCategory} productos</h4></div>                    
                </div>
                <div className="chartCategories2">
                    <div className="categoriesItemImage2"><img className="categoriesImage2" src={wholeWheatBread2Image}/></div>
                    <div className="categoriesItem2"><h2 className="categoriesText2">VOLOVANES DULCES</h2></div>
                    <div className="categoriesItem2"><h4 className="categoriesTextDescription2">{countByCategory[1].countPerCategory} productos</h4></div>                    
                </div>
                <div className="chartCategories2">
                    <div className="categoriesItemImage2"><img className="categoriesImage2" src={clocheImage}/></div>
                    <div className="categoriesItem2"><h2 className="categoriesText2">ESPECIALIDADES</h2></div>
                    <div className="categoriesItem2"><h4 className="categoriesTextDescription2">{countByCategory[2].countPerCategory} productos</h4></div>                    
                </div>
                <div className="chartCategories2">
                    <div className="categoriesItemImage2"><img className="categoriesImage2" src={cupcakeImage}/></div>
                    <div className="categoriesItem2"><h2 className="categoriesText2">POSTRES</h2></div>
                    <div className="categoriesItem2"><h4 className="categoriesTextDescription2">{countByCategory[3].countPerCategory} productos</h4></div>                    
                </div>
            </div>
            <div></div></>
                
            }

            
        </div>

    );
}

export default Categories;  