import React from "react";
import logo from "../assets/images/logoSinFondo.png"

function Header(){
    return (
        <div>
            <header>
                <div><img src={logo} alt="Aquí va el logo" className="logo"/></div>
                <div><h1 className="mainTittle">Volonan's Dashboard</h1></div>
            </header>
        </div>

    );
}

export default Header; 