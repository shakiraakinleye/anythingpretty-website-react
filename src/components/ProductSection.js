import React from "react";

export function ProductSection({children}){
    return(
        <section className="section__product py-10 bg-white text-black">
            <div className="product__list page--width">
                {children}
            </div>
      </section>
    )
}