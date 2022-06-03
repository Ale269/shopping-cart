import { NavLink } from "react-router-dom";

const NavigationTwo: React.FC = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <i className="fa-solid fa-angle-left"></i> back
        </NavLink>
      </nav>
    </header>
  );
};

export default NavigationTwo;
