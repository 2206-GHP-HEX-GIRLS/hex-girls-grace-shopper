import React from "react";
import { createProduct } from "../reducers/products";
import { connect } from "react-redux";

class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProduct({ ...this.state });
  }

  render() {
    const { name, price, description } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form id="createProduct" onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input name="name" onChange={handleChange} value={name} />

        <label>Product Price:</label>
        <input name="price" onChange={handleChange} value={price} />

        <label>Product Description:</label>
        <input name="description" onChange={handleChange} value={description} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createProduct: (product) => dispatch(createProduct(product, history)),
});

export default connect(null, mapDispatchToProps)(AddProduct);
