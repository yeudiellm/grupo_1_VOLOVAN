import React, { useState, useEffect } from "react";
import "../App.css";
import addUserImage from "../assets/images/add-user.png"
import addProductImage from "../assets/images/add-to-basket.png"

function RecentActivityPage(){

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
        <>
            <div className="mainRecenteActivityTitle2"><h2>ACTIVIDAD RECIENTE</h2></div>
            <div className="recentActivity2">
                    <div className="recentActivityTitle2"><h2 className="titleRecent2">ÚLTIMO USUARIO REGISTRADO</h2></div>
                    <div className="recentActivityItemImage2"><img className="recentActivityImage2" src={addUserImage}/></div>
                    <div className="recentActivityItem2">
                        <h3 className="recentActivityText2">Nombre: {lastUser.name}</h3>
                        <h4 className="recentActivityText2">Correo: {lastUser.email}</h4>
                    </div>
            </div>
            <div className="recentActivity2">
                    <div className="recentActivityTitle2"><h2 className="titleRecent2">ÚLTIMO PRODUCTO AGREGADO</h2></div>
                    <div className="recentActivityItemImage2"><img className="recentActivityImage2" src={addProductImage}/></div>
                    <div className="recentActivityItem2">
                        <h3 className="recentActivityText2">Nombre: {lastProduct.name}</h3>
                        <h4 className="recentActivityText2">Precio: {lastProduct.price}</h4>
                    </div>
            </div>
            
        </>

    );
}

export default RecentActivityPage; 