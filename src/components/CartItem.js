import React, {useContext} from "react";
import { Options } from "./Options";
import { convertPriceToLocalCurrency } from "../scripts/utility";
import { DispatchCartContext } from "../scripts/CartStorage";
import "../styles/CartItem.css"

export function CartItem({cartItem}){
    const initialOptions = {
        quantity: cartItem.quantity,
        color: cartItem.color
    }

    const [OptionsJSX, options] = Options(cartItem, initialOptions)

    const dispatchToCart = useContext(DispatchCartContext)

    // use options when checking out
    console.log(options)

    return(
        <div className="flex justify-between items-stretch py-4 pr-2 border border-[#c8c8c8] ">
            <div className="w-1/5 flex items-center border border-red-700">
                <img src={cartItem.imageUrl} alt={cartItem.name} />
            </div>

            <div className="border border-red-700 w-4/5 py-2 pl-2 grid grid-cols-3 sm:flex sm:flex-nowrap justify-between items-center gap-3 ">
                <p className="font-medium sm:w-1/6 overflow-auto text-center">
                    {cartItem.name}
                </p>

                <div className="col-span-2 sm:w-2/6">
                    {OptionsJSX}
                </div>

                <p className="flex flex-col items-center sm:w-1/6">
                    {convertPriceToLocalCurrency(cartItem.price)}
                    <span className="text-xs text-[#969696] ">
                        each
                    </span>
                </p>

                <p className="flex flex-col items-center sm:w-1/6"> 
                    {convertPriceToLocalCurrency(cartItem.price * options.quantity)} 
                    <span className="text-xs text-[#969696]">
                        Subtotal
                    </span>
                </p>

                <button className="w-14 justify-self-center py-1 px-4 text-white bg-[#eb0000] border border-[#eb0000] rounded-sm hover:bg-[#ff0000] "
                onClick={() => (
                    dispatchToCart(
                        {
                            type: "deleted",
                            item: cartItem,
                        }
                    )
                )}
                >
                    X
                </button>
            </div>
        </div>
    )
}
