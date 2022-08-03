import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProductsView from "./AllProductsView";
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";

const Paths = () => {
  return (
    <Router>
      <div className="Paths">
        <div className="fixed-top">
          <Header />
          <NavBar />
        </div>
        <Routes>
          <Route path="/allproducts" element={<AllProductsView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Paths;
