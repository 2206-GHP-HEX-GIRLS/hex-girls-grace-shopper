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
import LogIn from "./LogIn";
import Category from "./Category";
import OrderConfirm from "./OrderConfirm";
import { useSelector } from "react-redux";

const Paths = () => {
  let loggedInStatus = useSelector((state) => state.status);

  return (
    <Router>
      <div className="Paths">
        <div className="fixed-top">
          <Header />
          <NavBar />
        </div>
        {loggedInStatus ? (
          <Routes>
            <Route path="/products/category/:category" element={<Category />} />
            <Route path="/products" element={<AllProductsView />} />
            <Route path="/products/:id" element={<SingleProductView />} />
            <Route path="/products/:id/review" element={<ReviewPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
            <Route path="/login" element={<Home />} />
            <Route path="/confirmorder" element={<OrderConfirm />} />
          </Routes>
        ) : (
          <Routes>
            {/* <Route path="/products/category/:category" element={<NotFound />} />
            <Route path="/products" element={<NotFound />} />
            <Route path="/products/:id" element={<NotFound />} />
            <Route path="/products/:id/review" element={<NotFound />} /> */}
            <Route path="*" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/home" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<NotFound />} />
            <Route exact path="/products/add" element={<NotFound />} />
            <Route exact path="/products/:id/edit" element={<NotFound />} /> */}
            <Route path="/" element={<LogIn />} />
            <Route path="/login" element={<LogIn />} />
            {/* <Route path="/confirmorder" element={<OrderConfirm />} /> */}
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default Paths;
