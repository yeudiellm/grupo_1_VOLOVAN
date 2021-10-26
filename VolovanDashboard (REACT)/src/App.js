import React from "react";

import MainPage from "./components/MainPage";
import LastProductUser from "./components/LastProductUser";
import CategoriesPage from "./components/CategoriesPage";
import ProductListPage from "./components/ProductListPage";

import {Link, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="buttonCointainer">
      <div><Link to="/" className="buttonLinks">Inicio</Link></div>
      <div><Link to="/productslist" className="buttonLinks">Productos</Link></div>
      <div><Link to="/categories" className="buttonLinks">Categorías</Link></div>   
      <div><Link to="/lastproduct-user" className="buttonLinks">Actividad Reciente</Link></div>
      </nav>
      
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/lastproduct-user" component={LastProductUser}/>
      <Route excat path="/categories" component={CategoriesPage}/>
      <Route exact path="/productslist" component={ProductListPage}/>
    </div>
  );
}

export default App;
