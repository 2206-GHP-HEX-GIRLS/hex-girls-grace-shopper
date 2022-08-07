import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { getProducts } from "../reducers/products";
import "./css/Cart.css";

const Cart = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="Cart container">
      <h1>Your Cart</h1>
      <div className="row">
        <div className="col-sm-6">
          {" "}
          <CartTotals />
        </div>
        <div className="col-sm-6 cart-items">
          {products
            ? products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Cart;
