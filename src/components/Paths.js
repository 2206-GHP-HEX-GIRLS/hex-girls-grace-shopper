import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProductsView from "./AllProductsView";
import SingleProductView from "./SingleProductView";
import NotFound from "./NotFound";
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";
import Cart from "./Cart";
import ReviewPage from "./ReviewPage";

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
          <Route path="/allproducts/:id" element={<SingleProductView />} />
          <Route path="/allproducts/:id/review" element={<ReviewPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Paths;
