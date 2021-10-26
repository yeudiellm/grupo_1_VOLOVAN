import React from "react";
import "../App.css";
import userImage from "../assets/images/user.png"
import productImage from "../assets/images/box.png"
import categoriesImage from "../assets/images/menu.png"

function MainSummary(){
    return (
        <div>
            <div className="mainSummaryTitle"><h2>PRINCIPALES MÉTRICAS</h2></div>
            <div className="summaryContainer">
                <div className="chartSummaryContainer">
                    <div className="summaryItemImage"><img className="summaryImage" src={userImage}/></div>
                    <div className="summaryItem"><h2 className="summaryText">USUARIOS</h2></div>
                    <div className="summaryItem"><h4 className="summaryTextDescription">146 usuarios</h4></div>                    
                </div>
                <div className="chartSummaryContainer">
                    <div className="summaryItemImage"><img className="summaryImage" src={productImage}/></div>
                    <div className="summaryItem"><h2 className="summaryText">PRODUCTOS</h2></div>
                    <div className="summaryItem"><h4 className="summaryTextDescription">26 productos</h4></div>                    
                </div>
                <div className="chartSummaryContainer">
                    <div className="summaryItemImage"><img className="summaryImage" src={categoriesImage}/></div>
                    <div className="summaryItem"><h2 className="summaryText">CATEGORÍAS</h2></div>
                    <div className="summaryItem"><h4 className="summaryTextDescription">4 categorías</h4></div>                    
                </div>
            </div>
            <div><hr className="line"/></div>
    
            </div>

    );
}

export default MainSummary; 