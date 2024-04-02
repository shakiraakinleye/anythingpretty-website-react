import { createContext, useReducer } from "react";

function initialCart(){
    let initialCart; 

    if (localStorage.getItem('cart') === null){
        initialCart = [];
    } else {
        initialCart = JSON.parse(localStorage.getItem('cart'));
    }
    return initialCart;
}

export const CartContext = createContext(null)
export const DispatchCartContext = createContext(null)

export function updateCartStorage(updatedCart){
    localStorage.setItem("cart", JSON.stringify(updatedCart))
}

export function CartStorageReducer(cart, action){
    const cartItem = action.item;

    switch(action.type){
        case "added" : {
            const options = action.options
            const selected = options.color;
            const otherVariants =  cartItem.variants.filter(v => v !== selected)   
            const updatedCart = [
                    ...cart,
                    {
                        "id": cartItem.id,
                        "name" : cartItem.name,
                        "price" : cartItem.price,
                        "imageUrl" : cartItem.imageUrl,
                        "color" : options.color,
                        "quantity" : options.quantity,
                        "stock" : cartItem.stock,
                        "variants" : [selected, ...otherVariants]
                    }
            ]
            updateCartStorage(updatedCart)
            return updatedCart;    
        }
        case "edited color" : {
            const selected = action.color;
            const otherVariants =  cartItem.variants.filter(v => v !== selected)  
            const updatedCart = cart.map(item => {
                if (item.id === cartItem.id) {
                    return {
                        ...item,
                        color: action.color,
                        variants : [selected, ...otherVariants]
                    }
                } else {
                    return item;
                }
            })
            updateCartStorage(updatedCart)
            return updatedCart; 
        }
        case "edited quantity" : {
            const updatedCart = cart.map(item => {
                if (item.id === cartItem.id) {
                    return {
                        ...item,
                        quantity: action.quantity
                    }
                } else {
                    return item;
                }
            })
            updateCartStorage(updatedCart)
            return updatedCart; 
        }
        case "deleted" : {
            const id = cartItem.id;
            const updatedCart = cart.filter(item => item.id !== id)
            updateCartStorage(updatedCart)
            return updatedCart;
        }
        case "clear" : {
            const updatedCart = [];
            updateCartStorage(updatedCart);
            return updatedCart;
        }
        default : {
            throw Error("error")
        }
    }

}

export function CartContextProvider({children}){
    const [cart, dispatchCart] = useReducer(CartStorageReducer, initialCart());

    return(
        <CartContext.Provider value={cart}>
            <DispatchCartContext.Provider value={dispatchCart}>
                {children}
            </DispatchCartContext.Provider>
        </CartContext.Provider>
    )
}
