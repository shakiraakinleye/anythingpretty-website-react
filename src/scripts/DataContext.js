import { useState, useEffect, createContext} from "react";

export const ProductsContext = createContext(null)
export const DeliveryContext = createContext(null)

export function DataContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const [deliveries, setDeliveries] = useState(new Map());
  
    useEffect(() => {
        fetch("https://shakiraakinleye.github.io/Data/db.json")
        .then(response =>  response.json())
        .then(responseJSON => {
            const products = responseJSON.products;
            const deliveries = responseJSON.deliveries;
            return {products, deliveries}
        })
        .then(({products, deliveries}) => {
            setProducts(products)
            setDeliveries(deliveries)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            <DeliveryContext.Provider value={deliveries}>
                {children}
            </DeliveryContext.Provider>
        </ProductsContext.Provider>
    )
}


