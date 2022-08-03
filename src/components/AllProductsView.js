import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../reducers/products';

export class AllProductsView extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt="baked goods img" />
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.review}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = ({ products }) => ({
  products,
});

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(AllProductsView);
