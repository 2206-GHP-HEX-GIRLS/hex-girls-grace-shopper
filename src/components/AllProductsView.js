import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../reducers/products';
import { Link } from 'react-router-dom';

const AllProductsView = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/allproducts/${product.id}`}>
            <img src={product.imageUrl} alt="baked goods img" />
          </Link>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default AllProductsView;
