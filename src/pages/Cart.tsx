import React, { useEffect, useState } from "react";
import NavigationTwo from "../components/NavigationTwo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { increaseNumber, decreaseNumber } from "../features/cartSlice";

interface cartElementType {
  name: string;
  img: any;
  quantity: number;
  price: number;
}

const Cart: React.FC = () => {
  const cartList = useSelector((state: RootState) => {
    return state.cart.value;
  });

  const [cartDisplay, setCartDisplay] = useState<cartElementType[]>(cartList);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setCartDisplay(cartList);
    setTotalPrice(() => {
      let sum: number = 0;

      cartList.forEach((element) => {
        sum += element.price * element.quantity;
      });

      return sum;
    });
  }, [cartList]);

  const displayList = cartDisplay.map((element: cartElementType) => {
    return (
      <div className="cart-item">
        <img src={element.img} alt="poster foto" />
        <h3>{element.name}</h3>
        <div className="short-buy-container">
          <button
            onClick={() => {
              dispatch(increaseNumber(element.name));
            }}
          >
            +
          </button>
          <h4>
            €
            {(Math.round(element.price * element.quantity * 100) / 100).toFixed(
              2
            )}
          </h4>
          <button
            onClick={() => {
              dispatch(decreaseNumber(element.name));
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <NavigationTwo />
      <h1 className="cart-page-title">Cart</h1>
      <h3 className="total-price">
        €{(Math.round(totalPrice * 100) / 100).toFixed(2)}
      </h3>
      <div className="cart-items-container">{displayList}</div>
    </div>
  );
};

export default Cart;
