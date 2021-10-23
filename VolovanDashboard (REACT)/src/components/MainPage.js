import React from "react";
import MainSummary from "./MainSummary"
import ProductsList from "./ProductsList";
import Categories from "./Categories";
import LastProductUser from "./LastProductUser";

function MainPage(){
    return (
        <div>
            <MainSummary />
            <ProductsList />
            <Categories />
            <LastProductUser />
        </div>

    );
}

export default MainPage; 