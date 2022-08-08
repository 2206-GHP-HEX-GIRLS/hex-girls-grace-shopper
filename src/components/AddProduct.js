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
    quantity: 0,
    category: "",
    imageUrl: "",
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
    setProduct({
      name: "",
      price: 0.0,
      description: "",
      quantity: 0,
      category: "",
      imageUrl: "",
    });
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

        <label>Product Quantity:</label>
        <input placeholder="Product Quantity" name="quantity" />

        <label>Product Category:</label>
        <input placeholder="Product Category" name="category" />

        <label>ImageUrl:</label>
        <input placeholder="Product ImageUrl" name="ImageUrl" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
