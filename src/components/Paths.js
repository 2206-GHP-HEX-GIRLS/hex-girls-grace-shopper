import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllProductsView } from "./AllProductsView";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";

const Paths = () => {
  return (
    <Router>
      <div className="Paths">
        <NavBar />
        <Routes>
          <Route path="/allproducts" element={<AllProductsView />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Paths;
