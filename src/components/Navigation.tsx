import { NavLink } from "react-router-dom";

interface Props {
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<Props> = (props) => {
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
