import React, { useState } from "react";
import { addProduct } from "../reducers/addProduct";
import { useDispatch } from "react-redux";
import "./css/AddProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  let [product, setProduct] = useState({
    name: "",
    price: 0.0,
    description: "",
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    setProduct({
      ...product,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setProduct({ name: "", price: 0.0, description: "" });
    dispatch(addProduct(product));
  };

  return (
    <div className="AddProduct">
      <form id="createProduct" onSubmit={handleSubmit} onChange={handleChange}>
        <label>Product Name:</label>
        <input placeholder="Product Name" name="name" />

        <label>Product Price:</label>
        <input placeholder="Product Price" name="price" />

        <label>Product Description:</label>
        <input placeholder="Product Description" name="description" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
