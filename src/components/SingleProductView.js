import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../reducers/singleProduct";
import { Link, useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./css/SingleProductView.css";

const SingleProductView = () => {
  let { id } = useParams();

  const product = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const _addToCart = (evt) => {
    evt.preventDefault();
    console.log("added to cart");
    // dispatch(addToCart(product))
  };

  return (
    <div className="SingleProductView container">
      <h2>{product.name}</h2>
      <div className="row align-items-center">
        <div className="col-sm-4">
          <img
            src={product.imageUrl}
            alt="baked goods img"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-8 p-2">
          <div key={product.id}>
            <h3>${product.price}</h3>
            <div className="text-start">{product.description}</div>
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
              <button onClick={_addToCart} className="mb-2">
                Add To Cart <ShoppingCartIcon />
              </button>
              <Link to={`/products/${product.id}/review`}>Write a review!</Link>
              <Link to={`/products/${product.id}/edit`}>Edit Product</Link>
            </div>
            <div>
              <br></br>
              <br></br>
              <h3>⭐️Reviews⭐️</h3>
              {product.reviews &&
                product.reviews.map((review, i) => (
                  <div key={review.id}>
                    Review #{++i}: {review.content}
                    <br></br>
                    Rating: {review.rating} ⭐️'s!
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductView;
