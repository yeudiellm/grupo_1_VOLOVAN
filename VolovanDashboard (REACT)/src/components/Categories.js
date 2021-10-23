import React from "react";
import "../App.css";
import clocheImage from "../assets/images/cloche.png"
import wholeWheatBreadImage from "../assets/images/whole-wheat-bread.png"
import wholeWheatBread2Image from "../assets/images/whole-wheat-bread2.png"
import cupcakeImage from "../assets/images/cupcake.png"

function Categories(){
    return (
        <div>
            <div className="mainSummarySubtittle"><h2>CATEGORÍAS DE PRODUCTOS</h2></div>
            <div className="summaryContainer">
                <div className="summaryContainerItem">
                    <div className="containerItemContent"><img className="icon" src={clocheImage}/></div>
                    <div className="containerItemContent"><h2 className="textItemContent">ESPECIALIDADES</h2></div>
                    <div className="containerItemContent"><h4 className="textItemContentDescription">6 productos</h4></div>                    
                </div>
                <div className="summaryContainerItem">
                    <div className="containerItemContent"><img className="icon" src={wholeWheatBreadImage}/></div>
                    <div className="containerItemContent"><h2 className="textItemContent">VOLOVANES SALADOS</h2></div>
                    <div className="containerItemContent"><h4 className="textItemContentDescription">8 productos</h4></div>                    
                </div>
                <div className="summaryContainerItem">
                    <div className="containerItemContent"><img className="icon" src={wholeWheatBread2Image}/></div>
                    <div className="containerItemContent"><h2 className="textItemContent">VOLOVANES DULCES</h2></div>
                    <div className="containerItemContent"><h4 className="textItemContentDescription">10 productos</h4></div>                    
                </div>
                <div className="summaryContainerItem">
                    <div className="containerItemContent"><img className="icon" src={cupcakeImage}/></div>
                    <div className="containerItemContent"><h2 className="textItemContent">POSTRES</h2></div>
                    <div className="containerItemContent"><h4 className="textItemContentDescription">2 productos</h4></div>                    
                </div>
            </div>
        </div>

    );
}

export default Categories; 