import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavSelection {
  home: boolean;
  shop: boolean;
}

const Navigation: React.FC<Props> = (props) => {
  const [isCart, setIsCart] = useState<boolean>(false);
  const [selected, setSelected] = useState<NavSelection>({
    home: true,
    shop: false,
  });

  const result = isCart ? (
    <header>
      <nav>
        <Link
          to="/"
          onClick={() => {
            setIsCart(!isCart);
            setSelected({ home: true, shop: false });
          }}
        >
          back
        </Link>
      </nav>
    </header>
  ) : (
    <header>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setSelected({ home: true, shop: false });
              }}
              className={selected.home ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => {
                setSelected({ home: false, shop: true });
              }}
              className={selected.shop ? "active" : ""}
            >
              Shop
            </Link>
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
    </header>
  );
  return result;
};

export default Navigation;
