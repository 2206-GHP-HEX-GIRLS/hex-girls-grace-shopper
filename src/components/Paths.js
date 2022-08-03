<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllProductsView } from "./AllProductsView";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsView from './AllProductsView';
import SingleProductView from './SingleProductView';
>>>>>>> af0f149c788982b83b31e725096a846822afc54d

const Paths = () => {
  return (
    <Router>
      <div className="Paths">
        <NavBar />
        <Routes>
<<<<<<< HEAD
          <Route path="/allproducts" element={<AllProductsView />} />
          <Route path="/" element={<Home />} />
=======
          <Route path="/allproducts">
            <Route index element={<AllProductsView />} />
            <Route path=":id" element={<SingleProductView />} />
          </Route>
>>>>>>> af0f149c788982b83b31e725096a846822afc54d
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Paths;
