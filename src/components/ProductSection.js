import React, { useContext } from "react";
import { ProductsContext } from "../App";
import { Product } from "./Product";
import "../styles/Product.css"

export function ProductSection(){
    function ProductList(){
        const productsList = useContext(ProductsContext)

        const listItems = productsList.map((product) => {
            return (
                <li key={product.id}>
                    <Product product={product} />
                </li>
            )
        }) 
        
        return(
            <ul className="product__list px-4 sm:px-8 lg:px-16">
                {listItems}
            </ul>
        )
    }

    return(
        <section className="section__product py-10 bg-white text-black">
            <ProductList />
        </section>
    )
}
