import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../reducers/singleProduct';
import { Link, useParams } from 'react-router-dom';

const SingleProductView = () => {
  let { id } = useParams();

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

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

export default SingleProductView;
