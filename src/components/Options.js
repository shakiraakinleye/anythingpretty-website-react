import { useState } from "react"

function Variants({item, onColorChange}) {

    const variantList = item.variants.map((option, index) => {
        return (
            <option key={index} value={option}>{option}</option>
        )
    })

    return (
        <select name="product__color" className="w-16 h-full py-0.5 border-x border-y border-black rounded-t rounded-b cursor-pointer text-center appearance-none hover:text-white hover:bg-[#232323]"
        onChange={onColorChange}>
            {variantList}
        </select>
    )
}

export function Options(item, initialOptions){
   
    const [options, setOptions] = useState(initialOptions)

    const withinStock = options.quantity < item.stock;

    return(
            [
            <div className="flex justify-center gap-4 mb-2">
                <div>
                    <form id="product__quantity__form" className="h-full flex px-0.5 border-x border-y border-black rounded-sm" action="#">
                        <input type="button" value="-" className="bg-white w-5 text-center cursor-pointer hover:font-bold" 
                            onClick={() => {
                                if (options.quantity > 1){
                                    setOptions({
                                        ...options,
                                        quantity: (options.quantity - 1),
                                    })
                                }
                            }}
                        />

                        <span className="bg-white w-6 flex items-center justify-center font-semibold ">
                            {options.quantity}   
                        </span>
                        
                        <input type="button" value="+" className="bg-white w-5 text-center cursor-pointer hover:font-bold "                    
                            onClick={() => {
                                withinStock && 
                                setOptions({
                                ...options,
                                quantity: (options.quantity + 1),
                                })
                            }}
                        />
                    </form>
                </div>

                <div>
                    <Variants 
                    item={item}
                    onColorChange={(e) => {
                        setOptions({
                            ...options,
                            color: e.target.value,
                        })
                    }}
                    />
                </div>
            </div>,
            options
        ]
    )
}