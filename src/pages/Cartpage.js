import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../scripts/CartStorage";
import { CartItem } from "../components/CartItem";
import sadFace from "../images/sad.png";
import checkoutImg from "../images/checkout.png";
import { DispatchCartContext } from "../scripts/CartStorage";


export function Cartpage(){
    const cart = useContext(CartContext);

    function CartList(){
        const cartList = cart.map((item) => {
            return(
                <li key={item.id}>
                    <CartItem cartItem={item} />
                </li>
            )
        })

        return(
            <ul>{cartList}</ul>
        )
    }


    const isEmpty = cart.length === 0;
    const cartPageContent = isEmpty ?
    (
        <div className="flex flex-col justify-center items-center py-12 px-8 ">
            <img src={sadFace} alt="Sad face" className="w-16 mb-2" />
            <p className="text-xl mb-6">
                You haven't added any item to your shopping bag...
            </p>
            <button className="p-1 text-[#969696} hover:text-green-400">
                <Link to="/">
                    ← Add items to bag
                </Link>
            </button>
        </div>
    )
    :
    (
        <div>
            <CartList />
        </div>
    )

    const dispatchToCart = useContext(DispatchCartContext)

    // const cartSubtotal = cart.reduce((item, i) => {

    // }, 0)

    // const [shipping, setShipping] = useState(0)
// 
    // const cartTotal = cartSubtotal + shipping;

    return(
        <div className="relative bg-white py-10 px-4 sm:px-8 lg:px-16 text-black">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                {/* gap-4 sm:justify-between */}
                <div className="border border-[#c8c8c8] rounded-lg lg:w-2/3 lg:mr-2 pt-2 pb-6 px-2">
                    <div className="lg:h-16 py-4 flex justify-between items-center border-b-2 border-[#c8c8c8] ">
                        <p className="font-medium sm:text-xl ">
                            My Bag
                        </p>
                        <button className="py-2 px-4 text-white bg-black border border-black rounded-lg hover:bg-[#eb0000] hover:border-[#eb0000]"
                            onClick={() => {
                                dispatchToCart({
                                    type: "clear"
                                })
                            }}
                        >
                            Empty Bag
                        </button>
                    </div>
                    {cartPageContent}                    
                </div>
            
                <div className="h-min border border-[#c8c8c8] rounded-lg lg:w-1/3 lg:ml-2 pt-2 pb-6 px-2">
                    <div className="w-full">
                        <h1 className="lg:h-16 py-4 flex items-center font-medium sm:text-xl border-b-2 border-[#c8c8c8]  ">
                            Order Summary
                        </h1>
            
                        <div className="py-3 border-b border-[#c8c8c8] sm:pt-8 sm:pb-4 ">
                            <div className="flex justify-between pb-2 lg:items-center lg:pb-4 ">
                                <span>
                                    Subtotal
                                </span> 
                                <span>
                                    {/* {cartSubtotal} */}
                                </span>
                            </div>
            
                            <div className="flex justify-between pb-2 lg:items-center lg:pb-4 ">
                                <span>
                                    Shipping
                                </span> 
                                <span>
                                    00000
                                </span>
                            </div>
            
                            <div>
                                <select name="shipping"  className="w-full py-2 px-4 border border-black sm:py-3 ">
                                    <option value="0">Select A Shipping Destination</option>
                                    <option value="1500">Lagos Mainland - ₦1,500.00</option>
                                    <option value="2000">Lagos Island - ₦2,000.00</option>
                                    <option value="2500">Lagos Outskirts - ₦2,500.00</option>
                                </select>
                            </div>
                        </div>
        
        
                        <div className="flex justify-between items-center pt-2 pb-4 ">
                            <span className="font-medium">
                                TOTAL
                            </span> 
                            <span className="font-semibold">
                                {/* {cartTotal} */}
                            </span>
                        </div>
                                
                        <button className="w-full py-3 px-8 flex justify-center items-center gap-3 text-white bg-black border border-black rounded-lg hover:bg-[#232323] hover:border-[#232323]  ">
                            <img src={checkoutImg} alt="Checkout Button" className="w-6" />
                            <span className="text-white font-medium ">
                                Checkout
                            </span>
                        </button>
        
                    </div>
                </div>
            </div>
        
            <button className="absolute w-max top-2 right-4 sm:right-8 lg:right-16 p-1 text-xs sm:text-sm text-[#969696] hover:text-green-400 ">
                <Link to="/">
                    ← Back to shop
                </Link>
            </button>
      </div>
    )
}