import { useContext } from "react";
import { CartContext, DispatchCartContext } from "../scripts/CartStorage";
import { convertPriceToLocalCurrency } from "../scripts/utility";
import checkoutImg from "../images/checkout.png";

export function Checkout({cartSubtotal, shipping}) {
    const dispatchToCart = useContext(DispatchCartContext);
    const cart = useContext(CartContext);
    const cartString = cart.map(item => {
        return `${item.name} ${item.quantity}pc(s) ${item.color} - ${convertPriceToLocalCurrency(item.price * item.quantity)} \n`
    }).reduce((acc, itemString) => {
        return acc + itemString;
    }, ``)

    const message = `New Order!!!\nOrder Details\n${cartString}\nSubtotal - ${convertPriceToLocalCurrency(cartSubtotal)}\nShipping - ${convertPriceToLocalCurrency(+shipping)}\nTotal - ${convertPriceToLocalCurrency(cartSubtotal + +shipping)}`

    const urlMessage = encodeURI(message);

    function placeOrder(){
        const href = `https://wa.me/2348143671737?text=${urlMessage}`;
        window.open(href, "_blank") &&
        dispatchToCart({
            type: "clear"
        }) 
    }

    return (
        <button className="w-full py-3 px-8 flex justify-center items-center gap-3 text-white bg-black border border-black rounded-lg hover:bg-[#232323] hover:border-[#232323]"
            onClick={placeOrder}
        >
            <img src={checkoutImg} alt="Checkout Button" className="w-6" />
            <span className="text-white font-medium ">
                Checkout
            </span>
        </button>
    )
}

