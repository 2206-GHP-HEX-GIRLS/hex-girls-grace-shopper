<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProductsView from "./AllProductsView";
import SingleProductView from "./SingleProductView";
import NotFound from "./NotFound";
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";
import Cart from "./Cart";
import Register from "./Register";
import ReviewPage from "./ReviewPage";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
=======
=======
>>>>>>> 7fafafc60d459a3d9c23b70c3463db5cc9912373
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsView from './AllProductsView';
import SingleProductView from './SingleProductView';
import NotFound from './NotFound';
import Header from './Header';
import Home from './Home';
import NavBar from './NavBar';
import Cart from './Cart';
import Register from './Register';
import ReviewPage from './ReviewPage';
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import LogIn from './LogIn';
<<<<<<< HEAD
>>>>>>> 8198f826d97cbd22ac206692a76ef4392e26e7e9
=======
>>>>>>> 7fafafc60d459a3d9c23b70c3463db5cc9912373

const Paths = () => {
  return (
    <Router>
      <div className="Paths">
        <div className="fixed-top">
          <Header />
          <NavBar />
        </div>
        <Routes>
          <Route path="/products" element={<AllProductsView />} />
          <Route path="/products/:id" element={<SingleProductView />} />
          <Route path="/products/:id/review" element={<ReviewPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit" element={<EditProduct />} />
=======
          <Route path="/login" element={<LogIn />} />
>>>>>>> 8198f826d97cbd22ac206692a76ef4392e26e7e9
=======
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit" element={<EditProduct />} />
          <Route path="/login" element={<LogIn />} />
>>>>>>> 7fafafc60d459a3d9c23b70c3463db5cc9912373
        </Routes>
      </div>
    </Router>
  );
};

export default Paths;
