import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [searchMode, setSearchMode] = useState<boolean>(false);

  const handleSearch = () => {
    setSearchMode(!searchMode);
  };

  useEffect(() => {
    let body = document.querySelector("body")!;
    if (searchMode === true) {
      body.setAttribute("class", "no-scroll");
    } else {
      body.setAttribute("class", "");
    }
  }, [searchMode]);

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
            <a
              onClick={() => {
                setSearchMode(!searchMode);
              }}
            >
              Search
            </a>
          </li>
          <li>
            <a>Cart</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home searchMode={searchMode} setSearch={handleSearch} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
