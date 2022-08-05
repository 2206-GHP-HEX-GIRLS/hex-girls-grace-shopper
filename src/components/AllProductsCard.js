import React from "react";
import { Link } from "react-router-dom";
import "./css/AllProductsCard.css";

const AllProductsCard = ({ product }) => {
  return (
    <div className="AllProductsCard col-sm-3">
      <Link to={`/allproducts/${product.id}`}>
        <img
          src={product.imageUrl}
          alt="bakedgoods img"
          className="img-fluid mb-3"
        />
      </Link>
      <h5>{product.name}</h5>
      <p>${product.price}</p>
    </div>
  );
};

export default AllProductsCard;
