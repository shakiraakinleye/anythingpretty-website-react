import React, {useContext} from "react";
import { Link } from "react-router-dom";
import fullBrandLogo from "../images/ap-full-logo.jpg";
import cartIcon from "../images/cart.png";
import { CartContext } from "../scripts/CartStorage";

export function Navbar(){
    const cartCount = useContext(CartContext).length;

    return (
        <nav className="bg-white px-4 sm:px-8 lg:px-16 z-50 sticky top-0 border-b border-b-[#c8c8c8] ">
            <div className="py-3 flex justify-between items-center">
                <div>
                    <Link to="/">
                        <img src={fullBrandLogo} alt="Brand Logo" className="w-28 sm:w-40" />
                    </Link>
                </div>

                <div className="flex">
                    <Link to="/cart-page" className="relative">
                        <img src={cartIcon} alt="Cart" className="w-6 hover:w-7"/>
                        <p className="bg-[#ca929c] absolute -top-1 -right-1 flex justify-center items-center w-4 h-4 text-xs border-0 rounded-full  ">
                            {cartCount}
                        </p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}