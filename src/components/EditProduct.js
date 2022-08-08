import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "../reducers/singleProduct";
import "./css/EditProduct.css";

const EditProduct = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let [editedProduct, setEditedProduct] = useState({
    name: "",
    price: 0.0,
    description: "",
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    setEditedProduct({
      ...editedProduct,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setEditedProduct({ name: "", price: 0.0, description: "" });
    dispatch(editProduct(product.id, editedProduct));
  };

  return (
    <div className="EditProduct">
      <form id="updateProducton" Submit={handleSubmit}>
        <label name="name">Product Name:</label>
        <input
          placeholder="Update Product Name"
          name="name"
          value={editedProduct.name}
          onChange={handleChange}
        />
        <label>Price:</label>
        <input
          placeholder="Update Product Price"
          name="price"
          value={editedProduct.price}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          placeholder="Update Product Description"
          name="description"
          value={editedProduct.description}
          onChange={handleChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
