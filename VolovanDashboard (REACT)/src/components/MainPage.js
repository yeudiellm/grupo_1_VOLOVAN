import React from "react";
import MainSummary from "./MainSummary"
import ProductsList from "./ProductsList";
import Categories from "./Categories";
import LastProductUser from "./LastProductUser";

function MainPage(){
    return (
        <div>
            <div className="mainSummaryPosition"><MainSummary /></div>
            <div className="productListPosition"><ProductsList /></div>
            <div className="categoriesPosition"><Categories /></div>
            <div className="lastProductUserPosition"><LastProductUser /></div>
        </div>

    );
}

export default MainPage; 