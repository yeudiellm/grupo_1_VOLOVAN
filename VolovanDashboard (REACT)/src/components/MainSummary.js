import React, { useState, useEffect }  from "react";
import "../App.css";
import userImage from "../assets/images/user.png"
import productImage from "../assets/images/box.png"
import categoriesImage from "../assets/images/menu.png"

function MainSummary(){

    const [users, setUsers] = useState(['cargando'])
    const [products, setProducts] = useState(['cargando'])
    const [categories, setCategories] = useState(['cargando'])

    /* API de USUARIOS */
    useEffect(()=> {
        fetch('http://localhost:3000/api/users/')
            .then(response => response.json())
            .then(data => {
                setUsers(data.count)
            })
            .catch(error => console.error(error));
    }, [])


    /* API de PRODUCTOS */
    useEffect(()=> {
        fetch('http://localhost:3000/api/products/')
            .then(response => response.json())
            .then(data => {
                setProducts(data.count)
            })
            .catch(error => console.error(error));
    }, [])


    /* API de CATEGORIAS */
    useEffect(()=> {
        fetch('http://localhost:3000/api/products/')
            .then(response => response.json())
            .then(data => {
                // console.log(categories);
                setCategories(Object.keys(data.countByCategory).length);
            })
            .catch(error => console.error(error));
    }, [])




    return (


        <div>

            <div className="mainSummaryTitle"><h2>PRINCIPALES MÉTRICAS</h2></div>
            <div className="summaryContainer">
                <div className="chartSummaryContainer">
                    <div className="summaryItemImage"><img className="summaryImage" src={userImage}/></div>
                    <div className="summaryItem"><h2 className="summaryText">USUARIOS</h2></div>
                    <div className="summaryItem"><h4 className="summaryTextDescription">{users} usuarios</h4></div>                    
                </div>
                <div className="chartSummaryContainer">
                    <div className="summaryItemImage"><img className="summaryImage" src={productImage}/></div>
                    <div className="summaryItem"><h2 className="summaryText">PRODUCTOS</h2></div>
                    <div className="summaryItem"><h4 className="summaryTextDescription">{products} productos</h4></div>                    
                </div>
                <div className="chartSummaryContainer">
                    <div className="summaryItemImage"><img className="summaryImage" src={categoriesImage}/></div>
                    <div className="summaryItem"><h2 className="summaryText">CATEGORÍAS</h2></div>
                    <div className="summaryItem"><h4 className="summaryTextDescription">{categories} categorías</h4></div>                    
                </div>
            </div>
            <div><hr className="line"/></div>
    
        
        </div>

    );
}

export default MainSummary; 