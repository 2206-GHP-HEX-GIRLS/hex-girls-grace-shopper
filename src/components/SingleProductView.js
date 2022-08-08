import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../reducers/singleProduct";
import { Link, useParams } from "react-router-dom";
import "./css/SingleProductView.css";

const SingleProductView = () => {
  let { id } = useParams();

  const product = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const addToCart = (evt) => {
    evt.preventDefault();
    console.log("added to cart");
    // dispatch(addToCart(product))
  };

  return (
    <div className="SingleProductView container">
      <h2>{product.name}</h2>
      <div className="row align-items-center">
        <div className="col-sm-6">
          <img
            src={product.imageUrl}
            alt="baked goods img"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-6 p-2">
          <div key={product.id}>
            <h3>${product.price}</h3>
            <div>{product.description}</div>
            <div>{product.review}</div>
            <div>
              <label htmlFor="Quantity">Qty:</label>
              <select name="Quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="row mt-4 p-2">
              <button onClick={addToCart}>Add To Cart 🛒</button>
              <Link to={`/products/${product.id}/review`}>Write a review!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductView;
