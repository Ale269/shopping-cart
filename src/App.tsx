import React, { useState, useEffect } from "react";
import "./style/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import SearchComponent from "./components/SearchMode";

function App() {
  const [searchMode, setSearchMode] = useState<boolean>(false);

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation
                searchMode={searchMode}
                setSearchMode={setSearchMode}
              />
              <Home />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Navigation
                searchMode={searchMode}
                setSearchMode={setSearchMode}
              />
              <Shop />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {searchMode && (
        <SearchComponent
          searchMode={searchMode}
          setSearchMode={setSearchMode}
        />
      )}
    </Router>
  );
}

export default App;
