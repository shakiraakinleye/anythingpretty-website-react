import React from "react";

export function Navbar(){
    return (
        <nav className="nav nav--sticky page--width">
            <div className="nav__content py-3 flex justify-between items-center">
                <div className="nav__logo">
                    <a href="index.html">
                        <img src="images/ap-full-logo.jpg" alt="Brand Logo" />
                    </a>
                </div>

                <div className="nav__btns flex">
                    {/* <button className="btn__favorite">
                        <img src="images/favorite.png" alt="Favorite List" />
                    </button>  */}

                    <button className="btn__cart">
                        <img src="images/cart.png" alt="Cart" />
                        <p className="cart__count"></p>
                    </button>
                </div>
            </div>
        </nav>
    )
}