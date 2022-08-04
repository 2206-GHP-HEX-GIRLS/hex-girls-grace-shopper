import React from "react";
import { connect } from "react-redux";
import { editProduct } from "../reducers/singleProduct";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
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
      id: this.props.singleProduct.id,
      ...this.state,
    });
  }

  render() {
    const { name, price, description } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form id="updateProducton" Submit={handleSubmit}>
        <label name="name">Product Name:</label>
        <input
          placeholder="Update Product Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <label>Price:</label>
        <input
          placeholder="Update Product Price"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          placeholder="Update Product Description"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <button type="submit">Update Product</button>
      </form>
    );
  }
}

const mapState = ({ product }) => ({
  product,
});

const mapDispatch = (dispatch) => ({
  editProduct: (id, state) => dispatch(editProduct(id, state)),
});

export default connect(mapState, mapDispatch)(EditProduct);
