import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface Props {
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<Props> = (props) => {
  const cartList = useSelector((state: RootState) => {
    return state.cart.value;
  });

  const [cartNumber, setCartNumber] = useState<number>(0);

  useEffect(() => {
    let cartValue = 0;

    const initialNumber = cartList.forEach((element) => {
      cartValue += element.quantity;
    });
    setCartNumber(cartValue);
  }, [cartList]);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <a
              onClick={() => {
                props.setSearchMode(!props.searchMode);
              }}
            >
              Search
            </a>
          </li>
          <li>
            <NavLink to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
            <div className="cart-items-number">{cartNumber}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
