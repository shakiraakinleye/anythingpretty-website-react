import React from "react";
import "../styles/Homepage.css"

export function AdSection(){
    return (
      <section className="section__brand py-6 sm:py-10 ">
        <div className="mt-4 mb-12 sm:mt-10 sm:mb-32 px-4 sm:px-8 lg:px-16 text-white">
          <h1 className="pb-2 text-2xl sm:text-3xl font-medium uppercase">
            Affordable Timeless Pieces
          </h1>
          
          <div className="w-3/4 flex flex-wrap items-baseline gap-1 text-xs sm:text-sm capitalize">
            <span className="pr-1 font-serif text-xl sm:text-2xl ">Shop</span>
            <span>Earrings,</span>
            <span>Necklaces,</span>
            <span>Bracelets,</span>
            <span>Rings,</span>
            <span>Anklets and more...</span>
        </div>
      </div>
    </section>
    )
}