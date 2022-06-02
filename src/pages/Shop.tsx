import React from "react";
import posterArray from "../components/productModel";

const Shop: React.FC = () => {
  const displayPoster = posterArray.map((element) => {
    return (
      <div className="poster-container">
        <img src={element.src} alt={element.name} />
        <h4>{element.name}</h4>
        <button>Add to cart</button>
      </div>
    );
  });
  return <div className="shop-container">{displayPoster}</div>;
};

export default Shop;
