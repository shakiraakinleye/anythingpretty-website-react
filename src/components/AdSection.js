import React from "react";

export function AdSection(){
    return (
        <section className="section__brand">
      <div className="brand__container page--width text-white">
        <h1 className="brand__heading">
          Affordable Timeless Pieces
        </h1>
        
        <div className="brand__items">
          <span className="brand__item__action font-serif pr-1">Shop</span>
          <span className="brand__item">Earrings,</span>
          <span className="brand__item">Necklaces,</span>
          <span className="brand__item">Bracelets,</span>
          <span className="brand__item">Rings,</span>
          <span className="brand__item">Anklets and more...</span>
        </div>

      </div>
    </section>
    )
}