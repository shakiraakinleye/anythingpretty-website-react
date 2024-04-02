// import { useState } from "react";
import React, { useContext } from "react";
import { ProductsContext } from "../scripts/DataContext";
import { Product } from "./Product";
import "../styles/Product.css"


function ProductList(){
    const productsList = useContext(ProductsContext)

    const listItems = productsList.map((product) => {
        return (
                <Product key={product.id} product={product} />
            )
    }) 
        
    return(
            <div className="product__list grid px-4 sm:px-8 lg:px-16">
                {listItems}
            </div>
    )
}

export function ProductSection(){
    return(
        <section className="section__product py-10 bg-white text-black">
            <ProductList />
        </section>
    )
}
