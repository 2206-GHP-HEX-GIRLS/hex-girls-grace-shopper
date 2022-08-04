import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { getProducts } from "../reducers/products";

const Cart = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="Cart">
      <h1>Your Cart</h1>
      <CartTotals />
      {products
        ? products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        : "Loading..."}
    </div>
  );
};

export default Cart;
