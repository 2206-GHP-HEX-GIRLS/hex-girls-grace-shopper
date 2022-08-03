import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../reducers/products';

const AllProductsView = (props) => {
  let [products, setProducts] = useState(props.products ? props.products : '');

  useEffect(() => {
    props.getProducts();
  }, [props]);

  useEffect(() => {
    props.getProducts();
  }, [products, props]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt="baked goods img" />
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

const mapState = ({ products }) => ({
  products,
});

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(AllProductsView);
