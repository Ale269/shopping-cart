import React from "react";

interface Props {
  searchMode: boolean;
  setSearch: Function;
}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Shop</h1>
        <h3>Shop cause you can</h3>
        <button id="go-to-shop">Visit the shop</button>
      </div>
      <div className="img-section"></div>

      {props.searchMode && (
        <div className="search-section">
          <div
            className="overlay"
            onClick={(e) => {
              console.log(e.target);
              props.setSearch();
            }}
          >
            <div
              className="search-bar"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <input type="text" placeholder="search product" />
              <button type="button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
