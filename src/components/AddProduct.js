import React, { useState } from "react";
import { addProduct } from "../reducers/products";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./css/AddProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/products");
  };

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
    dispatch(addProduct(product)).then(redirect());
    setProduct({
      name: "",
      price: 0.0,
      description: "",
      quantity: 0,
      category: "",
      imageUrl: "",
    });
  };

  return (
    <div className="AddProduct">
      <h2>Add Product</h2>
      <form id="createProduct" className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <label>Product Name:</label>
            <input required name="name" type="text" onChange={handleChange} />

            <label>Product Price:</label>
            <input
              required
              name="price"
              type="number"
              placeholder="0.00"
              onChange={handleChange}
            />

            <label>Product Description:</label>
            <textarea
              required
              name="description"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-6">
            <label>Product Quantity:</label>
            <input
              required
              name="quantity"
              type="number"
              placeholder="0"
              onChange={handleChange}
            />

            <label>Product Category:</label>
            <select name="category" onChange={handleChange}>
              <option>---</option>
              <option>Cookies</option>
              <option>Cakes</option>
              <option>Pastries</option>
            </select>

            <label>ImageUrl:</label>
            <input
              name="ImageUrl"
              type="text"
              placeholder="https://"
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
