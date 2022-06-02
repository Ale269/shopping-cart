import React, { useEffect, useState } from "react";
import NavigationTwo from "../components/NavigationTwo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

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

  useEffect(() => {
    setCartDisplay(cartList);
  }, [cartList]);

  const displayList = cartDisplay.map((element: cartElementType) => {
    return (
      <div className="cart-item">
        <img src={element.img} alt="pipppo" />
        <h4>{element.price * element.quantity}</h4>
      </div>
    );
  });
  return (
    <div>
      <NavigationTwo />
      <div>ee</div>
      <div>{displayList}</div>
    </div>
  );
};

export default Cart;
