import React, { useState } from "react";
import "./css/CartItem.css";

const CartItem = ({ product }) => {
  const removeFromCart = () => {
    console.log("removed");
  };

  let [qty, setQty] = useState(1); // this will eventually be passed down as a prop (maybe)
  let subtotal = product.price * qty;

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    setQty(qty - 1);
  };

  return (
    <div className="CartItem">
      <div className="container">
        <div className="row align-items-center">
          <img
            src="https://i.imgur.com/VdpY14p.png"
            alt="logo"
            className="img-fluid col-sm-6"
          ></img>
          <div className="col-sm-6 container">
            <div className="row align-items-center">
              <div className="col-sm-12">
                <h5>{product.name}</h5>
                <p>
                  Qty: {qty} x ${product.price}
                  <button className="qty-increase-btn" onClick={increaseQty}>
                    +
                  </button>
                  <button className="qty-decrease-btn" onClick={decreaseQty}>
                    -
                  </button>
                </p>
                <p>Subtotal: ${subtotal}</p>
              </div>
              <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
