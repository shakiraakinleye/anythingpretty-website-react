import { useContext, useState } from "react"
import { DispatchCartContext } from "../scripts/CartStorage";

export function InitOptions(initOps, item ){
    const [options, setOptions] = useState(initOps)
    const dispatchToCart = useContext(DispatchCartContext)

    const withinStock = options.quantity < item.stock;

    function productColorChangeHandler(e){
        setOptions({
            ...options,
            color: e.target.value,
        })
    }
    
    function productIncreaseQuantityHandler(){
      withinStock && 
      setOptions({
        ...options,
        quantity: (options.quantity + 1),
        })
    }

    function productDecreaseQuantityHandler(){
      if (options.quantity > 1){
        setOptions({
            ...options,
            quantity: (options.quantity - 1),
        })
    }
    }


    function cartQuantityIncreaseHandler(){
        if (withinStock) {
            setOptions({
                ...options,
                quantity: (options.quantity + 1),
            })
            dispatchToCart({
                type: "edited quantity",
                item: item,
                quantity: (options.quantity + 1), 
            }) 
        } 
    }

    function cartQuantityDecreaseHandler(){
        if (options.quantity > 1){
            setOptions({
                ...options,
                quantity: (options.quantity - 1),
            }) 
            dispatchToCart({
                type: "edited quantity",
                item: item,
                quantity: (options.quantity - 1) 
            })
        }
    }

    function cartColorChangeHandler(e){
        setOptions({
            ...options,
            color: e.target.value,
        })
        dispatchToCart({
            type: "edited color",
            item: item,
            color: e.target.value,
        }) 
    }


    return(
        {productColorChangeHandler, productIncreaseQuantityHandler, productDecreaseQuantityHandler, cartQuantityIncreaseHandler, cartQuantityDecreaseHandler, cartColorChangeHandler, options}
    )
}


export function Options({item, options, onColorChange, onIncreaseQuantity, onDecreaseQuantity}){

    return(
            <div className="flex justify-center gap-4">
                <div>
                    <form id="product__quantity__form" className="h-full flex px-0.5 border-x border-y border-black rounded-sm" action="#">
                        <input type="button" value="-" className="bg-white w-5 text-center cursor-pointer hover:font-black " 
                            onClick={onDecreaseQuantity}
                        />

                        <span className="bg-white w-6 flex items-center justify-center font-semibold ">
                            {options.quantity}   
                        </span>
                        
                        <input type="button" value="+" className="bg-white w-5 text-center cursor-pointer hover:font-black "                    
                            onClick={onIncreaseQuantity}
                        />
                    </form>
                </div>

                <div>
                    <Variants 
                    item={item}
                    onChange={(e) => onColorChange(e)}
                    />
                </div>
            </div>
    )
}


function Variants({item, onChange}) {

    const variantList = item.variants.map((option, index) => {
        return (
            <option key={index} value={option} className="px-3 py-10">{option}</option>
        )
    })

    return (
        <select name="product__color" className="w-16 h-full py-0.5 border-x border-y border-black rounded-t rounded-b cursor-pointer text-center appearance-none hover:text-white hover:bg-[#232323]"
        onChange={onChange}>
            {variantList}
        </select>
    )
}