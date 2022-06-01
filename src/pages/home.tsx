import React from "react";
import homePhoto from "../img/imgHome.png";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Image & Poster</h1>
        <h3>Choose the best high definition posters without shipping costs</h3>
        <button id="go-to-shop">Visit the shop</button>
      </div>
      <div className="img-section">
        <img src={homePhoto} alt="photo-home" />
      </div>
    </div>
  );
};

export default Home;
