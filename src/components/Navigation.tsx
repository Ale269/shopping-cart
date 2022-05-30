import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<Props> = (props) => {
  const [isCart, setIsCart] = useState<boolean>(false);

  const result = isCart ? (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
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
          <Link
            to="/cart"
            onClick={() => {
              setIsCart(!isCart);
            }}
          >
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav>
      <Link
        to="/"
        onClick={() => {
          setIsCart(!isCart);
        }}
      >
        back
      </Link>
    </nav>
  );
  return result;
};

export default Navigation;
