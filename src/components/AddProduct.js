import React from "react";
import { addProduct } from "../reducers/addProduct";
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
    this.props.addProduct({ ...this.state });
  }

  render() {
    const { name, price, description } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form id="createProduct" onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          placeholder="Product Name"
          name="name"
          onChange={handleChange}
          value={name}
        />

        <label>Product Price:</label>
        <input
          placeholder="Product Price"
          name="price"
          onChange={handleChange}
          value={price}
        />

        <label>Product Description:</label>
        <input
          placeholder="Product Description"
          name="description"
          onChange={handleChange}
          value={description}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  addProduct: (product) => dispatch(addProduct(product, history)),
});

export default connect(null, mapDispatchToProps)(AddProduct);
