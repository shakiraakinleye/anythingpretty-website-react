import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, DispatchCartContext } from "../scripts/CartStorage";
import { CartItem } from "../components/CartItem";
import { convertPriceToLocalCurrency, ClassDisabled } from "../scripts/utility";
import { Checkout } from "../components/Checkout";
import { SelectDelivery } from "../components/DeliveryOptions";
import sadFace from "../images/sad.png";


function CartList(){
    const cart = useContext(CartContext);

    const cartList = cart.map((item) => {
        return(
            <CartItem key={item.id} cartItem={item} />
        )
    })

    return(
        <div>{cartList}</div>
    )
}

export function Cartpage(){
    const cart = useContext(CartContext);

    const cartEmpty = cart.length === 0;
    const {classDisabled} = ClassDisabled(!cartEmpty)

    const cartPageContent = cartEmpty ?
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

    const subtotals = cart.map(item => {
        return (item.quantity * item.price)
    })
    const cartSubtotal = subtotals.reduce((acc, sub) => {
        return acc + sub;
    }, 0)

    const [shipping, setShipping] = useState(0)
    function shippingHandler(e){
        setShipping(e.target.value)
    }

    const cartTotal = cartSubtotal + +shipping;


    return(
        <div className="relative bg-white py-10 px-4 sm:px-8 lg:px-16 text-black">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="border border-[#c8c8c8] rounded-lg lg:w-3/4 lg:mr-2 pt-2 pb-6 px-2">
                    <div className="lg:h-16 py-4 flex justify-between items-center border-b-2 border-[#c8c8c8] ">
                        <p className="font-medium text-xl sm:text-3xl">
                            My Bag
                        </p>
                        <button className={"py-2 px-4 text-white bg-black border border-black rounded-lg hover:bg-[#eb0000] hover:border-[#eb0000] " + classDisabled}
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
            
                <div className="h-min border border-[#c8c8c8] rounded-lg lg:w-1/4 lg:ml-2 pt-2 pb-6 px-2">
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
                                    {convertPriceToLocalCurrency(cartSubtotal)}
                                </span>
                            </div>
            
                            <div className="flex justify-between pb-2 lg:items-center lg:pb-4 ">
                                <span>
                                    Shipping
                                </span> 
                                <span>
                                    {convertPriceToLocalCurrency(shipping)}
                                </span>
                            </div>
                           <SelectDelivery 
                                onChange={shippingHandler}
                           />
                        </div>
        
        
                        <div className="flex justify-between items-center pt-2 pb-4 ">
                            <span className="font-medium">
                                TOTAL
                            </span> 
                            <span className="font-semibold">
                                {convertPriceToLocalCurrency(cartTotal)}
                            </span>
                        </div>
                        <Checkout
                            cartSubtotal={cartSubtotal}
                            shipping={shipping}
                        />
        
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