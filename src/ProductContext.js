import { useState, useEffect, createContext} from "react";

export const ProductsContext = createContext(null)

export function ProductsContextProvider({children}) {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch("https://shakiraakinleye.github.io/Data/db.json")
        .then(response => response.json())
        .then(productsJSON => productsJSON.products)
        .then(products => setProducts(products))
        .catch(err => console.log(err))
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}
