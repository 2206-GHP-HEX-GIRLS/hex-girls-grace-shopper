import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../reducers/cart';
import './css/CartItem.css';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const _removeFromCart = () => {
    console.log('removed from cart');
    dispatch(removeFromCart(product));
  };

  let [qty, setQty] = useState(product.quantity); // this will eventually be passed down as a prop (maybe)
  let subtotal = product.price * qty;

  const increaseQty = () => {
    setQty(qty + 1);
    dispatch(updateCart(product, 1));
  };

  const decreaseQty = () => {
    setQty(qty - 1);
    dispatch(updateCart(product, -1));
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
              <button onClick={_removeFromCart}>Remove From Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
