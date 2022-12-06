import { useState, useContext } from "react";
import whiteAddToCartIcon from "../images/white-add-to-cart.png";
import blackAddToCartIcon from "../images/black-add-to-cart.png";
import { convertPriceToLocalCurrency, ClassDisabled } from "../scripts/utility";
import { Options, InitOptions } from "./Options";
import { CartContext, DispatchCartContext } from "../scripts/CartStorage";
import "../styles/Product.css";

export function Product({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const cart = useContext(CartContext);
  const dispatchToCart = useContext(DispatchCartContext);
  const inStock = product.stock > 0;
  const inCart = cart.some((item) => item.id === product.id);

  const initialOptions = {
    quantity: inStock ? 1 : 0,
    color: product.variants[0],
  };

  const {
    productColorChangeHandler,
    productIncreaseQuantityHandler,
    productDecreaseQuantityHandler,
    options,
  } = InitOptions(initialOptions, product);

  const { classDisabled } = ClassDisabled(inStock);

  const stockDisplay = inStock ? (
    <>
      <p className="bg-[#008000] w-1 h-1 p-1 mr-1 border-0 rounded-full"></p>
      <p className="mr-4"> In Stock </p>
    </>
  ) : (
    <>
      <p className="bg-[#ff0000] w-1 h-1 p-1 mr-1 border-0 rounded-full"></p>
      <p className="mr-4"> Sold Out </p>
    </>
  );

  return (
    <span className={inStock ? " " : "cursor-no-drop "}>
      <div
        className={
          classDisabled +
          " flex flex-col items-center text-center px-4 py-2 capitalize"
        }
      >
        <div className="mb-2 max-w-[75%] sm:max-w-[160px] lg:max-w-[240px] overflow-clip">
          <img
            src={require("../" + product.imageUrl)}
            alt={product.name}
            className="product__image w-3/4 mx-auto sm:w-full sm:h-40 lg:h-60 hover:scale-125"
          />
        </div>

        <p className="mb-2 text-sm">{product.name}</p>

        <div className="flex items-center mb-2">
          {stockDisplay}
          <p>{convertPriceToLocalCurrency(product.price)}</p>
        </div>

        <Options
          item={product}
          options={options}
          onDecreaseQuantity={productDecreaseQuantityHandler}
          onIncreaseQuantity={productIncreaseQuantityHandler}
          onColorChange={productColorChangeHandler}
        />

        <div className="w-full mt-2">
          <button
            className="w-11/12 mx-auto py-2 px-4 bg-black flex justify-center items-center gap-2 text-white font-semibold border border-black rounded-lg hover:bg-white hover:text-black"
            onClick={() => {
              !inCart &&
                dispatchToCart({
                  type: "added",
                  item: product,
                  options: options,
                });
            }}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <img
              src={isHovered ? blackAddToCartIcon : whiteAddToCartIcon}
              alt="Add To Cart"
              className="w-5 pointer-events-none"
            />
            <span className="pointer-events-none">
              {inCart ? "Added To Bag" : "Add To Bag"}
            </span>
          </button>
        </div>
      </div>
    </span>
  );
}
