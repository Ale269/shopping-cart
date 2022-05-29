import React from "react";
import "./App.css";
import Home from "./pages/home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Search</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
