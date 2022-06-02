import React, { useEffect } from "react";
import posterArray from "../components/productModel";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state: RootState) => {
    return state.cart.value;
  });

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  const displayPoster: JSX.Element[] = posterArray.map((element) => {
    return (
      <div className="poster-container">
        <img src={element.src} alt={element.name} />
        <h4>{element.name}</h4>
        <h4>€{element.price}</h4>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                name: element.name,
                img: element.src,
                price: element.price,
              })
            );
          }}
        >
          Add to cart
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="shop-container">{displayPoster}</div>
      <div></div>
    </>
  );
};

export default Shop;
