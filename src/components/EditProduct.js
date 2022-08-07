import React from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../reducers/singleProduct';

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.product.name,
      price: this.props.product.price,
      description: this.props.product.description,
      quantity: this.props.product.quantity,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editProduct({
      id: this.props.product.id,
      ...this.state,
    });
    this.setState({
      name: this.props.product.name,
      price: this.props.product.price,
      description: this.props.product.description,
      id: this.props.product.id,
    });
  }

  render() {
    const { name, price, description, quantity } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form id="updateProducton" Submit={handleSubmit}>
        <label name="name">Product Name:</label>
        <input name="name" value={name} onChange={handleChange} />
        <label>Price:</label>
        <input name="price" value={price} onChange={handleChange} />
        <label>Quantity:</label>
        <input name="quantity" value={quantity} onChange={handleChange} />
        <label>Description:</label>
        <input name="description" value={description} onChange={handleChange} />
        <button type="submit">Update Product</button>
      </form>
    );
  }
}

const mapState = ({ product }) => ({
  product,
});

const mapDispatch = (dispatch) => ({
  editProduct: (product, id) => dispatch(editProduct(product, id)),
});

export default connect(mapState, mapDispatch)(EditProduct);
