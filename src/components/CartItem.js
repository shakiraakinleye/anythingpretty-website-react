import React, {useContext} from "react";
import { Options } from "./Options";
import { convertPriceToLocalCurrency } from "../scripts/utility";
import { DispatchCartContext } from "../scripts/CartStorage";

import { InitOptions } from "./Options";

export function CartItem({cartItem}){
    const initialCartOptions = {
        quantity: cartItem.quantity,
        color: cartItem.color
    }

    // Fix - Can't update Storage from Cart
    const {colorChangeHandler, increaseQuantityHandler, decreaseQuantityHandler, options} = InitOptions(initialCartOptions, cartItem) 

    console.log(options)
    const dispatchToCart = useContext(DispatchCartContext)

    function quantityChangeDispatch(){
        dispatchToCart(
            {
                type: "edited quantity",
                id: cartItem.id,
                quantity: options.quantity, 
            }
        )
        console.log("quantityChangeDispatched")
    }

    function cartQuantityIncreaseHandler(){
        increaseQuantityHandler()
        // &&
        // quantityChangeDispatch()
        // dispatchToCart({
        //         type: "edited quantity",
        //         id: cartItem.id,
        //         quantity: options.quantity, 
        //     })
    }

    function cartQuantityDecreaseHandler(){
        decreaseQuantityHandler() 
        // &&
        // quantityChangeDispatch();
    }

    function cartColorChangeHandler(e){
        // console.log("colorChangeDispatched")
        colorChangeHandler(e);
        // console.log("colorChangeDispatched 2")
        // dispatchToCart({
        //     type: "edited color",
        //     id: cartItem.id,
        //     // color: "Gold"
        //     color: options.color
        // });
        // console.log("colorChangeDispatched 3")

    }


    return(
        <div className="flex justify-between py-2 pr-2 border border-t-0 border-[#c8c8c8]">
            <div className="w-1/5 flex justify-center items-center">
                <img src={require("../" + cartItem.imageUrl)} alt={cartItem.name} className=" sm:w-20 lg:h-20 "/>
            </div>

            <div className="w-4/5 py-2 pl-2 grid grid-cols-3 sm:flex sm:flex-nowrap justify-between items-center gap-3 ">
                <p className="font-medium sm:w-1/6 overflow-auto text-center">
                    {cartItem.name}
                </p>

                <div className="col-span-2 sm:w-2/6">
                    <Options 
                        item={cartItem}
                        options={options}
                        onDecreaseQuantity={cartQuantityDecreaseHandler}
                        onIncreaseQuantity={cartQuantityIncreaseHandler}
                        onColorChange={cartColorChangeHandler}
                    />
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
