import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSingleProduct } from '../reducers/singleProduct';
import { Link } from 'react-router-dom';

const SingleProductView = (props) => {
  let [product, setSingleProduct] = useState(
    props.product ? props.product : ''
  );

  useEffect(() => {
    props.getSingleProduct();
  }, [props]);

  useEffect(() => {
    props.getSingleProduct();
  }, [product, props]);

  return (
    <div>
      <div key={product.id}>
        <img src={product.imageUrl} alt="baked goods img" />
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
        <div>{product.review}</div>
      </div>
      <div>
        Quantity
        <select name="Quantity">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>

      <button type="submit">Add To Cart🛒</button>
      <Link to="/review">Write a review!</Link>
    </div>
  );
};

const mapState = ({ product }) => ({
  product,
});

const mapDispatch = (dispatch) => ({
  getSingleProduct: () => dispatch(getSingleProduct()),
});

export default connect(mapState, mapDispatch)(SingleProductView);
