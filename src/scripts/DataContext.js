import { useState, useEffect, createContext} from "react";

export const ProductsContext = createContext(null)
export const DeliveryContext = createContext(null)
export const ReviewsContext = createContext(null)

export function DataContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const [deliveries, setDeliveries] = useState(new Map());
    const [reviews, setReviews] = useState(new Map())
  
    useEffect(() => {
        fetch("https://ap-mock-data.vercel.app/Data/db.json")
        .then(response =>  response.json())
        .then(responseJSON => {
            const products = responseJSON.products;
            const deliveries = responseJSON.deliveries;
            const reviews = responseJSON.reviews;
            return {products, deliveries, reviews}
        })
        .then(({products, deliveries, reviews}) => {
            setProducts(products)
            setDeliveries(deliveries)
            setReviews(reviews)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            <DeliveryContext.Provider value={deliveries}>
                <ReviewsContext.Provider value={reviews}>
                    {children}
                </ReviewsContext.Provider>
            </DeliveryContext.Provider>
        </ProductsContext.Provider>
    )
}


