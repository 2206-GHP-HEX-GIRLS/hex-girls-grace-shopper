import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirm = () => {
  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="text-left logo p-2 px-5">
              {' '}
              <Link to="/products">
                <img
                  src="https://i.imgur.com/VdpY14p.png"
                  width="50"
                  alt="logo"
                />
              </Link>{' '}
            </div>
            <div class="invoice p-5">
              <h5>Thank You!</h5> <span>You order has been confirmed!</span>
              <p class="font-weight-bold mb-0">
                Thanks for shopping with us!
              </p>{' '}
              <Link to="/products">
                <span>Boolean Bakers</span>
              </Link>
            </div>
            <div class="d-flex justify-content-between footer p-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
