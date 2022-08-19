import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProduct, getSingleProduct } from "../reducers/singleProduct";
import { Link, useParams } from "react-router-dom";
import "./css/EditProduct.css";
import EditIcon from "@mui/icons-material/Edit";

const EditProduct = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
    // eslint-disable-next-line
  }, [dispatch]);

  let [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    quantity: product.quantity,
    category: product.category,
    imageUrl: product.imageUrl,
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
      <h2>
        Edit {product.name} <EditIcon />
      </h2>
      <form id="updateProduct" className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <label>Product Name:</label>
            <input
              required
              name="name"
              type="text"
              value={editedProduct.name}
              onChange={handleChange}
            />

            <label>Product Price:</label>
            <input
              required
              name="price"
              type="number"
              placeholder="0.00"
              value={editedProduct.price}
              onChange={handleChange}
            />

            <label>Product Description:</label>
            <textarea
              required
              name="description"
              type="text"
              value={editedProduct.description}
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
              value={editedProduct.quantity}
              onChange={handleChange}
            />

            <label>Product Category:</label>
            <select
              name="category"
              value={editedProduct.category}
              onChange={handleChange}
            >
              <option>Cookies</option>
              <option>Cakes</option>
              <option>Pastries</option>
            </select>

            <label>ImageUrl:</label>
            <input
              name="ImageUrl"
              type="text"
              placeholder="https://"
              value={editedProduct.imageUrl}
              onChange={handleChange}
            />
          </div>
        </div>

        <Link to="/products">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default EditProduct;
