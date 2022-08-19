import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/CartTotals.css';

const CartTotals = (props) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/confirmorder');
  };

  const checkout = (e) => {
    e.preventDefault();
    console.log('checking out things');
    redirect();
  };

  return (
    <div className="CartTotals container ">
      <div className="row align-items-center">
        <div className="col-sm-4">
          <Link to="/products">
            <button className="cont-shopping">Continue Shopping</button>
          </Link>
        </div>
        <div className="col-sm-4">
          {/* <h6>Subtotal: $35.00</h6>
          <h6>Shipping: $7.00</h6> */}
          <h5>{`Total: $${props.price()}`}</h5>
        </div>
        <div className="col-sm-4">
          <button className="checkout" onClick={checkout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
