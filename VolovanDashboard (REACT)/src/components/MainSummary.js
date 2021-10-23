import React from "react";
import "../App.css";
import userImage from "../assets/images/user.png"
import productImage from "../assets/images/box.png"
import categoriesImage from "../assets/images/menu.png"

function MainSummary(){
    return (
        <div>
            <div className="mainSummarySubtittle"><h2>PRINCIPALES MÉTRICAS</h2></div>
            <div className="summaryContainer">
                <div className="summaryContainerItem">
                    <div className="containerItemContent"><img className="icon" src={userImage}/></div>
                    <div className="containerItemContent"><h2 className="textItemContent">USUARIOS</h2></div>
                    <div className="containerItemContent"><h4 className="textItemContentDescription">146 usuarios en total</h4></div>                    
                </div>
                <div className="summaryContainerItem">
                    <div className="containerItemContent"><img className="icon" src={productImage}/></div>
                    <div className="containerItemContent"><h2 className="textItemContent">PRODUCTOS</h2></div>
                    <div className="containerItemContent"><h4 className="textItemContentDescription">20 productos</h4></div>                    
                </div>
                <div className="summaryContainerItem">
                    <div className="containerItemContent"><img className="icon" src={categoriesImage}/></div>
                    <div className="containerItemContent"><h2 className="textItemContent">CATEGORÍAS</h2></div>
                    <div className="containerItemContent"><h4 className="textItemContentDescription">4 categorías</h4></div>                    
                </div>
            </div>
        </div>

    );
}

export default MainSummary; 