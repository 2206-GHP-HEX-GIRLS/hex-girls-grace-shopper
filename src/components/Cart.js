import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { getProducts } from "../reducers/products";
import "./css/Cart.css";

const Cart = () => {
  const products = useSelector((state) => state.products);
  // const cart = useSelector((state) => state.cart) // will eventually be the state from our cart
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="Cart container">
      <h2>Your Cart</h2>
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
