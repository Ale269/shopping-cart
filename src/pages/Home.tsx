import React from "react";
import homePhoto from "../img/imgHome.png";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  let navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Image & Poster</h1>
        <h3>Choose the best high definition posters without shipping costs</h3>
        <button
          id="go-to-shop"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Visit the shop
        </button>
      </div>
      <div className="img-section">
        <img src={homePhoto} alt="home" />
      </div>
    </div>
  );
};

export default Home;
