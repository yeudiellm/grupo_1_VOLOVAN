import React, { useState, useEffect } from "react";
import "../App.css";
import addUserImage from "../assets/images/add-user.png"
import addProductImage from "../assets/images/add-to-basket.png"

function RecentActivity(){

    const [lastUser, setLastUser] = useState(['']);
    const [lastProduct, setLastProduct] = useState(['']);

    /* API último usuario registrado */
    useEffect(()=> {
        fetch('http://localhost:3000/api/users/')
            .then(response => response.json())
            .then(data => {
                setLastUser(data.users.pop())
            })
            .catch(error => console.error(error));
    }, [])

    /* API último producto agregado */
    useEffect(()=> {
        fetch('http://localhost:3000/api/products/')
            .then(response => response.json())
            .then(data => {
                setLastProduct(data.products.pop())
            })
            .catch(error => console.error(error));
    }, [])
    

    return (
        <div>
            <div className="mainRecenteActivityTitle"><h2>ACTIVIDAD RECIENTE</h2></div>
            <div className="recentActivity">
                    <div className="recentActivityTitle"><h2 className="titleRecent">ÚLTIMO USUARIO REGISTRADO</h2></div>
                    <div className="recentActivityItemImage"><img className="recentActivityImage" src={addUserImage}/></div>
                    <div className="recentActivityItem">
                        <h3 className="recentActivityText">Nombre: {lastUser.name}</h3>
                        <h4 className="recentActivityText">Correo: {lastUser.email}</h4>
                    </div>
            </div>
            <div className="recentActivity">
                    <div className="recentActivityTitle"><h2 className="titleRecent">ÚLTIMO PRODUCTO AGREGADO</h2></div>
                    <div className="recentActivityItemImage"><img className="recentActivityImage" src={addProductImage}/></div>
                    <div className="recentActivityItem">
                        <h3 className="recentActivityText">Nombre: {lastProduct.name}</h3>
                        <h4 className="recentActivityText">Precio: {lastProduct.price}</h4>
                    </div>
            </div>
            
        </div>

    );
}

export default RecentActivity; 