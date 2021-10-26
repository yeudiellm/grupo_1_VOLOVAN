import React from "react";
import "../App.css";
import addUserImage from "../assets/images/add-user.png"
import addProductImage from "../assets/images/add-to-basket.png"

function LastProductUser(){
    return (
        <div>
            <div className="mainRecenteActivityTitle"><h2>ACTIVIDAD RECIENTE</h2></div>
            <div className="recentActivity">
                    <div className="recentActivityTitle"><h2 className="titleRecent">ÚLTIMO USUARIO REGISTRADO</h2></div>
                    <div className="recentActivityItemImage"><img className="recentActivityImage" src={addUserImage}/></div>
                    <div className="recentActivityItem">
                        <h3 className="recentActivityText">Nombres:</h3>
                        <h4 className="recentActivityText">Apellidos:</h4>
                        <h4 className="recentActivityText">Correo:</h4>
                    </div>
            </div>
            <div className="recentActivity">
                    <div className="recentActivityTitle"><h2 className="titleRecent">ÚLTIMO PRODUCTO AGREGADO</h2></div>
                    <div className="recentActivityItemImage"><img className="recentActivityImage" src={addProductImage}/></div>
                    <div className="recentActivityItem">
                        <h3 className="recentActivityText">Nombre:</h3>
                        <h4 className="recentActivityText">Precio:</h4>
                        <h4 className="recentActivityText">Descripción:</h4>
                    </div>
            </div>
            
        </div>

    );
}

export default LastProductUser; 