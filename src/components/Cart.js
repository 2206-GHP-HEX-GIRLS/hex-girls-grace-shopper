import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import { getCart } from '../reducers/cart';
import './css/Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    cart.map((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className="Cart container">
      <h2>Your Cart</h2>
      <div className="row">
        <div className="col-sm-6">
          {' '}
          <CartTotals price={totalPrice} />
        </div>
        <div className="col-sm-6 cart-items">
          {cart &&
            cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
