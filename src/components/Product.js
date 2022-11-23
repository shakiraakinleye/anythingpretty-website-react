import addToCartIcon from "../images/add-to-cart.png";
import  {convertPriceToLocalCurrency}  from "../scripts/utility";
import "../styles/Product.css"

export function Product({product}){
    // import image from {product.imageUrl};

    const inStock = product.stock > 0;
    const stockDisplay = inStock ? 
    (
        <>
            <p className="product__stock__icon product--instock"></p> 
            <p className="product__stock__note mr-4"> In Stock </p>
        </>
        )
        :
        (
        <>
            <p className="product__stock__icon product--soldout"></p>
            <p className="product__stock__note mr-4"> Sold Out </p>
        </>
    )

    const formattedPrice = convertPriceToLocalCurrency(product.price)
        

    return(
        <div className={inStock ? "product" : "product opacity-50 pointer-events-none"}>
            <div className="product__image__container mb-2">
              {/* <img src={product.imageUrl} alt={product.name} className="product__image" /> */}
            </div>

            <p className="product__name">{product.name}</p>

            <div className="product__info">
                {stockDisplay}                                    
                <p className="product__price"> {formattedPrice} </p>
            </div>

            <div className="product__options">
                <div className="product__quantity__container">
                    <form id="product__quantity__form" className="product__quantity__form" action="#">
                        <input type="button" value="-" className={"product__quantity--decrement"} />
                        <input type="text" name="product__quantity__value" 
                        value={inStock ? 1 : 0}
                        className="product__quantity__value"  />
                        <input type="button" value="+" className="product__quantity--increment" />
                    </form>
                </div>

                <div className="product__variant" >
                    <Variants variants={product.variants} />
                </div>
            </div>

            <div className="product__actions" >
              <button className="btn__add-cart">
                <img src={addToCartIcon} alt="Add To Cart" />
                <span> Add To Bag </span>
              </button>
            </div>
        </div>
    )
}


function Variants({variants}) {

    const variantList = variants.map((option, index) => {
        return (
            <option key={index} value={option}>{option}</option>
        )
    })

    return (
        <select name="product__color" className="product__color">
            {variantList}
        </select>
    )
}

